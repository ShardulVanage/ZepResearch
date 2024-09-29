"use client"

import React, { useEffect, useState, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Calendar, MapPin } from "lucide-react"
import { client } from "../../lib/pocketbase"

const CARD_OFFSET = 10
const SCALE_FACTOR = 0.06
const FLIP_INTERVAL = 5000
const VISIBILITY_DELAY = 3000

export function CardStack() {
  const [cards, setCards] = useState([])
  const [isVisible, setIsVisible] = useState(false)
  const fetchCount = useRef(0)

  const fetchCards = useCallback(async () => {
    try {
      fetchCount.current += 1
      console.log(`Fetching cards. Fetch count: ${fetchCount.current}`)
      const res = await client.collection("Conference").getFullList()
      const formattedCards = res.map((conf) => ({
        id: conf.id,
        title: conf.title,
        shortDescription: conf.shortDescription,
        date: conf.date,
        location: conf.location,
      }))
      setCards(formattedCards)
    } catch (error) {
      console.error("Error fetching cards:", error)
    }
  }, [])

  useEffect(() => {
    fetchCards()
    const timer = setTimeout(() => setIsVisible(true), VISIBILITY_DELAY)
    return () => clearTimeout(timer)
  }, [fetchCards])

  useEffect(() => {
    let interval
    if (cards.length > 1 && isVisible) {
      interval = setInterval(() => {
        setCards((prevCards) => {
          console.log("Flipping cards")
          const newArray = [...prevCards]
          newArray.unshift(newArray.pop())
          return newArray
        })
      }, FLIP_INTERVAL)
    }
    return () => clearInterval(interval)
  }, [cards.length, isVisible])

  const handleClose = useCallback((id) => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== id))
  }, [])

  if (!isVisible || cards.length === 0) {
    return null
  }

  return (
    <div className="fixed -bottom-0 left-0 z-20 w-[300px] h-[400px]">
      <div className="relative h-[500px] w-60 md:w-96">
        <AnimatePresence>
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              className="absolute dark:bg-black bg-white h-[400px] w-60 md:w-96 rounded-r-3xl p-6 shadow-xl border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
              style={{
                transformOrigin: "top center",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                top: index * -CARD_OFFSET,
                scale: 1 - index * SCALE_FACTOR,
                zIndex: cards.length - index,
              }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{card.title}</h2>
                  <button
                    onClick={() => handleClose(card.id)}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
                <p className="text-base text-gray-600 dark:text-gray-300 mb-6 flex-grow">{card.shortDescription}</p>
                <p className="text-base text-gray-500 dark:text-gray-400 flex items-center mb-2">
                  <Calendar size={20} className="mr-3" />
                  {card.date}
                </p>
                <div className="mt-auto">
                  <p className="text-base text-gray-500 dark:text-gray-400 flex items-center">
                    <MapPin size={20} className="mr-3" />
                    {card.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
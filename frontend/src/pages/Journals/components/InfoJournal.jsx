import React, { useCallback, useEffect, useState, memo } from "react"
import { client } from "../../../lib/pocketbase"
import { motion } from "framer-motion"
import { Send } from "lucide-react"
import { Link } from "react-router-dom"

// Skeleton loader component
const SkeletonLoader = () => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-pulse">
    <div className="h-16 bg-blue-200"></div>
    <div className="h-48 bg-blue-300"></div>
    <div className="p-6">
      <div className="h-6 bg-blue-200 rounded w-3/4 mb-4"></div>
      <div className="h-4 bg-blue-200 rounded w-1/2 mb-4"></div>
      <div className="h-10 bg-blue-200 rounded mt-4"></div>
    </div>
  </div>
)

// Separate component for journal card to prevent unnecessary re-renders
const JournalCard = memo(({ journal, index }) => {
  const cardAnimationProps = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.2 * index, duration: 0.5 },
  }

  const buttonAnimationProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  }

  return (
    <motion.div
      {...cardAnimationProps}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col"
    >
      <div className="p-4 bg-gradient-to-r from-indigo-400 to-cyan-400 flex items-center justify-between">
        <span className="text-sm font-medium text-gray-600"></span>
      </div>

      {journal.img && (
        <img
          src={journal.img || "/placeholder.svg"}
          alt={journal.title || "Journal image"}
          width={300}
          height={200}
          className="w-full h-48 object-contain my-2"
          loading="lazy"
        />
      )}

      <hr className="mt-2" />

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-gray-800 font-JosefinSans">{journal.title}</h3>
        <div className="text-gray-700">
          <span className="font-bold text-lg pr-1">ISSN:</span>
          <span>{journal.issncode}</span>
        </div>

        <div className="mt-auto">
          <Link
            to={`/JournalSubmittion?title=${encodeURIComponent(journal.title)}`}
            className="w-full inline-flex items-center justify-center text-sm px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
          >
            <motion.span {...buttonAnimationProps} className="inline-flex items-center">
              Submit for Review <Send className="w-4 h-4 ml-2" />
            </motion.span>
          </Link>
        </div>
      </div>
    </motion.div>
  )
})

JournalCard.displayName = "JournalCard"

function InfoJournal() {
  const [journals, setJournals] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isMounted = true

    const fetchJournals = async () => {
      try {
        const response = await client.collection("Journals").getFullList()
        if (isMounted) {
          setJournals(response)
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message)
          console.error("Error fetching journals:", err)
        }
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    fetchJournals()

    return () => {
      isMounted = false
    }
  }, [])

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, index) => (
          <SkeletonLoader key={index} />
        ))}
      </div>
    )
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {journals.map((journal, index) => (
        <JournalCard key={journal.id || index} journal={journal} index={index} />
      ))}
    </div>
  )
}

export default memo(InfoJournal)


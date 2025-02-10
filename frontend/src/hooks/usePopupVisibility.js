"use client"

import { useState, useEffect } from "react"

const usePopupVisibility = (delay = 3000) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  const hide = () => setIsVisible(false)

  return { isVisible, hide }
}

export default usePopupVisibility


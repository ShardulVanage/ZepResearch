import { useEffect } from "react"
import confetti from "canvas-confetti"
import { Cross, X } from "lucide-react"


const ConfettiPopup = ({ onClose }) => {
  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    })

    // const timer = setTimeout(() => {
    //   onClose()
    //   window.location.href = "https://www.wfcces.com/"
    // }, 4000) // Changed to 4000ms (4 seconds)

    // return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div onClick={onClose} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl text-center">
        <button onClick={onClose} className="inline-flex justify-end items-center w-full"><X/></button>
        <div className="p-4">
        <h2 className="text-2xl font-bold text-green-600 mb-4">Submitted successfully.</h2>
        <p className="mb-4"> our Coordinator will contact you shortly.</p>
        </div>
        
      </div>
    </div>
  )
}

export default ConfettiPopup


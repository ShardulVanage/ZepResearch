import { ConfVenue } from "../Conference Components/ConfVenue"
import Hero from "../Conference Components/Hero"
import Testimonial from "../Conference Components/Testimonial"
import Why from "../Conference Components/Why"


function Conferences() {
  return (
  <section>
    <Hero/>
    <ConfVenue/>
    <Why/>
    <Testimonial/>
  </section>
  )
}

export default Conferences
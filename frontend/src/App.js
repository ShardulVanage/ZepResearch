import logo from './logo.svg';
import './App.css';
import Hero from './Hero components/Hero';
import Partners from './Hero components/Partners';
import Features from './Hero components/Feature';
import Testimonials from './Hero components/Testomonial';
import Faq from './Hero components/Faq';
import MemberCta from './Hero components/Cta';


function App() {
  return (
    <div className="App">
      
      <Hero/>
      <MemberCta/>
      <Partners/>
      <Features/>
      <Testimonials/>
      <Faq/>
     
    </div>
  );
}

export default App;

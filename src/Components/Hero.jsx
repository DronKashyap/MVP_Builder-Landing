import Sectioninfo from './UI/Sectioninfo'
import Bookcallbtn from './UI/Bookcallbtn'

function Hero() {
  return (
    <div className='flex flex-col items-center p-14'>
      <Sectioninfo colour="#00FF66" text="5 Founders booked the call this week" />
      <h1> We build and launch your startup mvp in just 2 weeks</h1>
      <h2> Launchpad labs build and ships investor-ready MVPs for Founders</h2>
      <h3> Trusted by 50+ VC-backed founders</h3>
      <Bookcallbtn text="Book My Free MVP call" />
    </div>
  )
}

export default Hero

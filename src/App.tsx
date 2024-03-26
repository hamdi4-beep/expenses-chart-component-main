import BartChartContainer from "./components/BarChartContainer"

function App() {
  return (
    <div className='font-sans bg-neutral-cream h-screen md:grid md:content-center' role='main'>
      <BartChartContainer />

      <div className="text-center mx-2">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" className='text-indigo-500' target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://www.frontendmentor.io/profile/hamdi4-beep" className='text-indigo-500'>Hamdi Kamel</a>.
      </div>
    </div>
  )
}

export default App
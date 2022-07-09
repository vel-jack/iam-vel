import { AppDev, EthDev, GameDev, Intro,Footer } from "./components"

const divider = <p className=" sm:hidden px-5">______</p>
function App() {
  return (
    <div className="font-mono">
      <Intro/>
      {divider}
      <AppDev/>
      {divider}
      <GameDev/>
      {divider}
      <EthDev/>
      <Footer/>
    </div>
  )
}

export default App

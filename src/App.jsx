import { AppDev, EthDev, GameDev, Intro,Footer } from "./components"

function App() {
  return (
    <div className="font-mono">
      <Intro/>
      <AppDev/>
      <GameDev/>
      <EthDev/>
      <Footer/>
    </div>
  )
}

export default App

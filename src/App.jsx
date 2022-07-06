import { AppDev, EthDev, GameDev, Intro } from "./components"


function App() {
  return (
    <div className="font-mono">
      <Intro/>
      <AppDev/>
      <GameDev/>
      <EthDev/>
    </div>
  )
}

export default App

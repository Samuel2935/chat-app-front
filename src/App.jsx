
import './App.css'
import { Button } from './components/ui/button'
import { Progress } from "@/components/ui/progress"
import { CarouselSize } from './components/CarouselSize'


function App() {


  return (
  <div>
    <h2>hello chat</h2>
    <Button>Click me</Button>
    <Progress value={70} />
    <CarouselSize/>

  </div>
  )
}

export default App

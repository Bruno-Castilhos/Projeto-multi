import {Header} from "./components/Header"
import {Footer} from "./components/Footer"
import { Home } from "./pages/home"

export function App() {
  
  return (
    <div className="flex flex-col justify-between h-full">
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

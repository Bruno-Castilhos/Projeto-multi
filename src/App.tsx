import {Header} from "./components/Header"
import {Footer} from "./components/Footer"
import { Home } from "./pages/home"

export function App() {
  
  return (
    <div className="flex flex-col overflow-y-auto h-screen">
      <Header />
      <div className="flex justify-center absolute inset-x-36 top-36 text-[30px]">Dashboards</div>
      <Home />
      <Footer />
    </div>
  )
}

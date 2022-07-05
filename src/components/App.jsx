import { Experience } from "./Experience"
import { Header } from "./Header"
import { Presentation } from "./Presentation"
import { Work } from "./Work"
import { About } from "./About"
import { Footer } from "./Footer"

export const App = () => {
  return (
    <div className="app">
        <Header/>
        <Presentation/>
        <About/>
        <Experience/>
        <Work/>
        <Footer/>
    </div>
  )
}

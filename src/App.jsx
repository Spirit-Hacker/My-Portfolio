import { Route, BrowserRouter as Router, Routes} from "react-router-dom"
import Navbar from "./components/Navbar"
import { Home, About, Projects, Contacts } from "./pages"

const App = () => {
  return (
    <div>
        <main className="bg-slate-300/20 h-full">
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                </Routes>
            </Router>
        </main>
    </div>
  )
}

export default App

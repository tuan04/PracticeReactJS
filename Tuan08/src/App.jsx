import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Nav from "./components/Nav"
import Dashboard from "./pages/Dashboard"
import Project from "./pages/Project"
import Teams from "./pages/Teams"
import Analytics from "./pages/Analytics"
import Message from "./pages/Message"
import Integration from "./pages/Integration"

function App() {

  return (
    <div className="mx-auto flex">
      <div style={{width: "20%"}}>
        <Nav/>
      </div>
      <div style={{width: "80%"}}>
        <Header/>
        <div>
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/project" element={<Project/>}/>
            <Route path="/teams" element={<Teams/>}/>
            <Route path="/analytics" element={<Analytics/>}/>
            <Route path="/messages" element={<Message/>}/>
            <Route path="/integration" element={<Integration/>}/>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App

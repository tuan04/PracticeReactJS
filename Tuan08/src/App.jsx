import Header from "./components/Header"
import Nav from "./components/Nav"
import Dashboard from "./pages/Dashboard"

function App() {

  return (
    <div className="mx-auto flex">
      <div style={{width: "20%"}}>
        <Nav/>
      </div>
      <div style={{width: "80%"}}>
        <Header/>
        <div>
          <Dashboard/>
        </div>
      </div>
    </div>
  )
}

export default App

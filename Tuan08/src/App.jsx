import Header from "./components/Header"
import Nav from "./components/Nav"

function App() {

  return (
    <div className="mx-auto flex m-2" style={{width: "90%"}}>
      <div style={{width: "20%"}}>
        <Nav/>
      </div>
      <div style={{width: "80%"}}>
        <Header/>
        <div>Body</div>
      </div>
    </div>
  )
}

export default App

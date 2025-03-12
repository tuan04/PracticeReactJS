import { useReducer, useState } from 'react'
import './App.css'

const reducer = (state, action) => {
  switch(action.type){
    case '+':
      return {result: action.a + action.b}
    case '-':
    case '*':
    case '/':
  }
}

function App() {
  const [state ,dispatch] = useReducer(reducer, {result: 0});

  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [op, setOp] = useState('')

  return (
    <div>
      <input type="text" style={{margin: 10}} onChange={(e) => setA(e.target.value)}/> <br />
      <input type="text" onChange={(e) => setB(e.target.value)}/> <br />
      
      <button onClick={() => dispatch('+', a, b)}>+</button>
      <button onClick={() => dispatch('-', a, b)}>-</button>
      <button onClick={() => dispatch('*', a, b)}>*</button>
      <button onClick={() => dispatch('/', a, b)}>/</button>

      <br />
      <label htmlFor="">Result: {state.result}</label>
    </div>
  )
}

export default App

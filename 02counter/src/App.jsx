import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter]  = useState(15)

  //let counter = 15

  const addValue = () => {

    if(counter>=20){
      alert(" counter value more than 20 not allowed");
    }
    else{
      setCounter(counter+1)
    }
  }

  const removeValue = () => {
    if(counter<=0){
      alert("Negative counter value not allowed");
    }
    else{
      setCounter(counter-1)
    }
  }
  
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button> 
      <br />
      <button
      onClick={removeValue}
      >remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App

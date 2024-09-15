import React, { useState } from 'react'
import './Counter.css'
const Counter = () => {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);
    // Handling Increment Button
    const handleIncrement = () =>{
      setCount(count + step)
    }
  return (
    <div className='counter'>
      <div className="counter-header">
        <h1>useState Challenge</h1>
      </div>
      <div className="count">
        <h2>Count:</h2>
        <h2 className='count-num'>{count}</h2>
      </div>
      <div className="count-steps">
        <h3>Steps: </h3>
        <input type="number" value={step} onChange={(e) => setStep(Number(e.target.value))}/>
      </div>
      <div className="btn-box">
        <button className="increment" onClick={() => handleIncrement()} disabled={count >= 100}>Increment</button>
        <button className="decrement" onClick={() => setCount(count - step)} disabled={count === 0}>Decrement</button>
        <button className="reset" onClick={() => setCount(0)}>Reset</button>
      </div>
      <div className="history">
        <h3>History:{count}</h3>
      </div>
    </div>
  )
}

export default Counter

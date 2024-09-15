import React, { useEffect, useState } from 'react'

const Subscriber = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() =>{
            setCount(count + 1)
        },1000);
        return() => clearInterval(interval)
        
    }, [count]);
    
  return (
    <div>
      <h1>Subscriber</h1>
      <h2>{count}</h2>
    </div>
  )
}

export default Subscriber

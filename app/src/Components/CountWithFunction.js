import React,{useState} from 'react'

function CountWithFunction() {
    const [count, setCount]=useState(0);
    const IncreaseCount=()=>{
        setCount(count+1)
    }
  return (
    <div>
      <p>count: {count}</p>
      <button className='btn btn-secondary' onClick={IncreaseCount}>Increase</button>
    </div>
  )
}

export default CountWithFunction

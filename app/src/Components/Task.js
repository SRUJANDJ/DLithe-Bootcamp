import React,{useState} from 'react'

function Task() {
    const [count,setCount]=useState(0);
    const IncreaseCount=()=>{
        setCount(count+1)
    }
    const decrement=()=>{
        setCount(count-1)
    }
    const square=()=>{
        setCount(count*count)
        if (count>1000000){
            setCount(2)
        }
        
    }
  return (
    <div>
        <p>COUNT: {count}</p>
        <button className='btn btn-danger m-2' onClick={decrement}>Minus 1</button>
        <button className='btn btn-warning text-white m-2' onClick={IncreaseCount}>Plus 1</button>
        <button className='btn btn-success m-2' onClick={square}>Square</button>
    </div>
  )
}

export default Task

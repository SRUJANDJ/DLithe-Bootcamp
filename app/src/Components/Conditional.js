import React from 'react'

function Conditional(props) {
    const user=props.user
    const number=props.number
    if (number%2===0){
        Number=number
    }
    let message=""
    if (parseInt(number)>0){
        message="Positive number"
    }
    else{
        message="negative number "+String(number)
    }
  return (
    <div>
      <p>{(user==="admin")? <h1>welcome admin</h1>:<h1>welcome Customer</h1>}</p>
      <h3>{Number}</h3>
      <h3>{message}</h3>
    </div>
  )
}

export default Conditional

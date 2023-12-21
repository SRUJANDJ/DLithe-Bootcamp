import React from 'react'

function TaskTwo() {
    const names=["Bibin","Nikhil","Shri","Varsha","Ziya"];
  return (
    
    <div>
      <ul>
        {names.map((names,index)=>(
            <li key={index}>
                Welcome {names}
            </li>
        ))}
      </ul>
      <ul>
        {names.map((names,index)=>(
            <li key={index}>
                Welcome {names}, Index is {index}
            </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskTwo

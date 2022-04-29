
   
import React, { useState } from 'react';

const Toggle = () => {
  const [show,setShow]=useState(true);
  return (
    <div>
      {
        show?<h1>Hello, I am Muskan.</h1>:null
      }
      <button onClick={()=>setShow(!show)}>Toggle</button>
    </div>
  )
}

export default Toggle;
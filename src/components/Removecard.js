import React, { useState } from 'react'

const Card = (elm) => {

let arr = [
  {
    id:0, Name: 'Manoj', work: 'Cyber'
  },
  {
    id:1, Name: 'Sunil', work: 'Ndv'
  },
  {
    id:2, Name: 'Rohit', work: 'Driver'
  }
]

const[array, setArray]= useState(arr);

const clearAll = ()=>{
  setArray([])
}

const remove=(id)=>{
  let newArr = array.filter((elm)=>{
      return elm.id != id;
})
          setArray(newArr);

}
    return(
      <>
      {
        array.map((elm)=>
        <div className="box" key={elm.id}>
          My name is {elm.Name} & I'm a {elm.work}.<br />
          <button id='click'>Click</button>
          <button id='remove' onClick={()=> remove(elm.id)}>remove</button>
      </div>
      
        )
      }
      <button id='clearall'  onClick={clearAll}>Clear all</button>

    </>
    )
}

export default Card

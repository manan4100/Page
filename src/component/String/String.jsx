import React,{useState} from 'react'

const String = () => {
  const[str, setStr] = useState()
  const[rev, setRev] = useState()

  const handleString =() => {
    let a= str
    let reversed = a.split('').reverse().join('')
    setRev(reversed)
  }
  
  return (
    <>
      <label>Enter the string</label> 
      <input type="text" onChange={(e) => {setStr(e.target.value); handleString();}}/><br/><br/>
      <label>Reverse String is</label>
      <h2>{rev}</h2>
       
    </>
  )
}

export default String
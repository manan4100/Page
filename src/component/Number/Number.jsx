import React, {useState} from 'react'

const Number = () => {
  const[num, setNum] = useState()
  const[odd, setOdd] = useState()
  const[even,setEven] = useState()

  const handleNumber = async(a) =>{
    // let a = num
    await setNum(a)
    if(a%2 === 0)
      setEven(a)
    // else
    //   setOdd(a)
    if(a%2 !==0)
      setOdd(a)
  }
  return (
    <>
      {/* <h5>Manan</h5> */}
      <lable>Enter the number : </lable>
      {/* <input type="number" onChange={(e) =>{setNum(e.target.value);handleNumber();}}/><br/><br/> */}
      <input type="number" onChange={async(e) => {await handleNumber(e.target.value);}}/><br/><br/>
      {/* <button onClick={handleNumber}>Check No.</button> */}
      <label>Even number is </label>
      <h2>{even}</h2>
      <label>Odd Number is </label>
      <h2>{odd}</h2>
    </>
  )
}

export default Number
import React, {useState} from 'react'

const Celsius = () => {
  const[num, setNum] = useState()
  const[cel, setCel] = useState()
  const[farh, setFarh] = useState()


  const handleTemperature = async(a) => {
    // let a = 45
    await setNum(a)
    let c = Math.floor(a*(9/5)+(32))
    let d = Math.floor((a-32)*(5/9))
    setCel(c)
    setFarh(d)
  }
  return (
    <>
      <label>Enter the temperature:  </label>
      <input type="number" onChange={async(e) => {await handleTemperature(e.target.value);}} /><br/><br/>
      <label>Celsius to Farhrenheit:</label>
      {/* <input type="number" C/> */}
      <h2>{cel}</h2>
      <label>Farhrenheit to Celsius: </label>
      <h2>{farh}</h2>
        
    </>
  )
}

export default Celsius
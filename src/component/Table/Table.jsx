import React,{useState} from 'react'

const Table = () => {
  const[table, setTable] = useState()
  const[multi, setMulti] = useState()

  const handleTable = async(a) => {
    // let a = table
    await setTable(a)
    for(let i=1;i<=10;i++){
      const x = a * i
      setMulti(a + "*" + i + "=" +x)
    }
   
  }
  return (
    <>
        <label>Enter the number :</label>
        {/* Enter the number: <input id="number"/><br/><br/> */}
        {/* <input type='number' onChange={(e) =>{setTable(e.target.value);handleTable();}}/><br/><br/> */}
        <input type='number' onChange={async(e) => {await handleTable(e.target.value);}}/><br/><br/>


        {/* <button onClick="handleTable()">Print a table </button> */}
        <label>Table:</label>
        <h2>{multi}</h2>
    </>
  )
}

export default Table
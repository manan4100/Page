import React from 'react'
import {Link} from 'react-router-dom'

const HomePage = () => {
  return (
    <>
        
            {/* <a href="/" className="button">Link Button</a> */}
            <Link to="/table" className="button">Print a table.</Link>
            <Link to="/string" className="button">Reverse string</Link>
            <Link to="/number" className="button">Find even & odd no. .</Link>
            <Link to="/celsius" className="button">Convert celsius to farhrenheit</Link>
            {/* <button className="button">Button</button>
            <input type="button" className="button" value="Input Button"></input> */}
    </>
  )
}

export default HomePage
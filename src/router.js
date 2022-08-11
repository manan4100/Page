import {Routes, Route} from 'react-router-dom'
import HomePage from './component/HomePage/HomePage'
import Features from './component/Features/Features'
import About from './component/About/About'
import Contact from './component/Contact/Contact'
import Number from './component/Number/Number'
import String from './component/String/String'
import Celsius from './component/Celsius/Celsius'
import Table from './component/Table/Table'


const Router = () =>{
    return(
        <>
            <Routes>
                <Route path='/home' element={<HomePage/>}/>
                <Route path='/features' elemrnt={<Features/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/number' element={<Number/>}/>
                <Route path='/string' element={<String/>}/>
                <Route path='/celsius' element={<Celsius/>}/>
                <Route path='/table' element={<Table/>}/>
            </Routes>
        </>
    )
}

export default Router
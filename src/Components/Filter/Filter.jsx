import React, { useState } from 'react'
import "./Filter.scss"
import {FaAngleDown,FaAngleUp} from "react-icons/fa"
const Filter = () => {
    const [selected,setSelected]=useState("Select region")
    const dropdownOptions=[
        {id:1,label:"Asia"},
        {id:2,label:"Avropa"},
        {id:3,label:"Avstraliya"},
        {id:4,label:"Asia"},
        {id:5,label:"Asia"},
    ]
    const [click,setClick]=useState(false)
    return (
    <div className='filter'> 
    <button className='select-btn' onClick={()=>(setClick((e)=>!e))}>
        {selected}
       {click ? <FaAngleUp/> :<FaAngleDown/>}
    </button>
   {click && <ul className='select-list' >
        {dropdownOptions?.map((item)=>(
            <li key={item.id} onClick={()=>{setSelected(item.label),setClick(false)}}>{item.label}</li>
        ))}
    </ul>}
    </div>
  )
}

export default Filter
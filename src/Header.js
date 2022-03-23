import React from 'react'
import { NavLink } from 'react-router-dom';
import '../src/Components/Style/Style.css';
import { useState } from 'react';

function Header() {
    const [show, setShow] =useState(false);
    return (
        <div className='header'>
            <div className='tittleHead'><div className='longText'>The</div><span className='headOfText'>Serin</span></div>
            <div>
            <i onClick={()=>setShow(!show)} className="fa-solid fa-bars" ></i>
            </div>
            
            <ul className={show ? "navbar ":"navLinkFlex"}  type='none'>
                <li><NavLink style={({isActive})=>{return{"color":isActive? "red":''}}} to="/home" className="headerNavLink">Home</NavLink></li>
                <li><NavLink style={({isActive})=>{return{"color":isActive? "red":''}}} to="/bollywood" className="headerNavLink">Bollywood</NavLink></li>
                <li><NavLink style={({isActive})=>{return{"color":isActive? "red":''}}} to="/hollywood" className="headerNavLink">HollyWood</NavLink></li>
                <li><NavLink style={({isActive})=>{return{"color":isActive? "red":''}}} to="/fitness" className="headerNavLink">Fitness</NavLink></li>
                <li><NavLink style={({isActive})=>{return{"color":isActive? "red":''}}} to="/technology" className="headerNavLink">Technology</NavLink></li>
                <li><NavLink style={({isActive})=>{return{"color":isActive? "red":''}}} to="/food" className="headerNavLink">Food</NavLink></li>



            </ul>
            
           
        </div>
    )
}

export default Header

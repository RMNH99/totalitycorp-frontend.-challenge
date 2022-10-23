import React from "react";
import {NavLink} from "react-router-dom";
import { BsGlobe } from "react-icons/bs";
const Sidebar =()=>{

    const close=()=>{
        document.querySelector('.blur-bgaactive').className = 'blur-bg';
        document.querySelector('.sidebaractive').className='sidebar';
    }

    return(
    <div className="sidebar">
        <button className="close" onClick={close}>&times;</button>
        <NavLink to="/cmn" className='menu-tems'>Existing Inventory</NavLink>
        <NavLink to="/cmn" className='menu-tems'>Used Inventory</NavLink>
        <NavLink to="/cmn" className='menu-tems'>Trade-In</NavLink>
        <NavLink to="/cmn" className='menu-tems'>Test Drive</NavLink>
        <NavLink to="/cmn" className='menu-tems'>Insurance</NavLink>
        <NavLink to="/cmn" className='menu-tems'>Cybertruck</NavLink>
        <NavLink to="/cmn" className='menu-tems'>Roadster</NavLink>
        <NavLink to="/cmn" className='menu-tems'>Semi</NavLink>
        <NavLink to="/cmn" className='menu-tems'>Charging</NavLink>
        <NavLink to="/cmn" className='menu-tems'>Powerwall</NavLink>
        <NavLink to="/cmn" className='menu-tems'>Commercial Energy</NavLink>
        <NavLink to="/cmn" className='menu-tems'>Utilities</NavLink>
        <NavLink to="/cmn" className='menu-tems'>Find Us</NavLink>
        <NavLink to="/cmn" className='menu-tems'>Support</NavLink>
        <NavLink to="/cmn" className='menu-tems'>Investor Relations</NavLink>
        <NavLink to="/cmn" className='menu-tems glob'>
            <div><BsGlobe/> </div>
            <div>
                <h3> United States</h3>
                <h4> English</h4>
            </div>
            
            </NavLink>
        
    </div>
    );
}

export default Sidebar;
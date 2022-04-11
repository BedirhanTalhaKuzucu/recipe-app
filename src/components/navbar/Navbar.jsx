import React from 'react';
import { NavLink } from "react-router-dom";
import "./Navbar.css";


function Navbar() {
    return (
        <div className='component-container'>
                <div className='navbar' >
                <div className='navbar-left'>
                    <NavLink to="/home"  className="navlink"><span className='btk'>{'<'}BTK{'>'}</span> <span style={{color:"#00ADB5"}}>RECIPE</span></NavLink>
                </div>

                <div className='navbar-right'>
                    <NavLink to="/about" className="navlink">About</NavLink>
                    {/* <NavLink to="/Github" className="navlink">
                        Github
                    </NavLink> */}
                    <a href="https://github.com/BedirhanTalhaKuzucu" className="navlink"> Github</a>

                    <NavLink to="/" className="navlink"  onClick={() => sessionStorage.clear()}>
                        Logout
                    </NavLink>
                </div>
            </div>
        </div>
        
        
    )
}

export default Navbar
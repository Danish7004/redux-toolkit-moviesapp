import React from 'react';
import { Link } from 'react-router-dom';

//icons import
import logo from "./icons/video-solid.svg";

function Header(props) {


    return (
        <header>
           
           <div className="logo">
           <img src={logo} alt="" width="50" />
           </div>

            <div className='logo'>
                <h1>
                    <Link to='/'>Movies Hub</Link>
                </h1>
            </div>

            
           
        </header>
    );
}

export default Header;
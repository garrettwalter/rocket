import React from 'react';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = (props) => {
    return (
        
        <nav className="navbar-outside sticky-top">
            <div className="row navbar">
                <div className="col-1 text-center text-light">
                 <FontAwesomeIcon icon={faUsers} className="text-light icon users"/>
                </div>
                <div className="col-10 navbar-text-row">
                    <div className="row">
                        <p className="navbar-text">Hello Jane, Happy Birthday!</p>
                    </div>
                    <div className="row">
                        <p className="navbar-star">★ ★ ★ ★ ☆</p>
                    </div>
                </div>
                <div className="col-1 text-center text-light">
                <FontAwesomeIcon icon={faUserCircle} className="text-light user-icon"/>
                </div>
            </div>
            <div className="outerSlant">
                
            </div>
            <div className="innerSlant">
                
            </div>
        </nav>
        
    );
}

export default Navbar;
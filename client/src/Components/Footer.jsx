import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';

const Footer = (props) => {
    return (
        <div>
            <footer className="footer sticky-bottom">
                <div className="row nav-block-mobile">
                    <div className="mobile-block text-center">
                        <FontAwesomeIcon icon={faChartLine} className="icon-mobile"/>
                        <p className="mobile-text">Dashboard</p>
                    </div>
                    <div className="mobile-block text-center">
                        <FontAwesomeIcon icon={faTasks} className="icon-mobile"/>
                        <p className="mobile-text">Actions</p>
                    </div>
                    <div className="mobile-block text-center">
                        <FontAwesomeIcon icon={faCheckCircle} className="icon-mobile"/>
                        <p className="mobile-text">Check-In</p>
                    </div>
                    <div className="mobile-block text-center">
                        <FontAwesomeIcon icon={faUsers} className="icon-mobile"/>
                        <p className="mobile-text">Directory</p>
                    </div>
                    <div className="mobile-block text-center">
                        <FontAwesomeIcon icon={faBell} className="icon-mobile"/>
                        <p className="mobile-text">Notifications</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
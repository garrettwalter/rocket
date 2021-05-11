import React from 'react';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Engagement = (props) => {
    return (
        <div className="notif-outside row">
            <div className="col-1">
                <FontAwesomeIcon icon={faUserCircle} className="text-light engagement-icon"/>
            </div>
            <div className="col-9">
                <p className="notif-text">John Doe did something on 5/10/21 that caused you to get a notification.</p>
            </div>
            
        </div>
    );
}

export default Engagement;
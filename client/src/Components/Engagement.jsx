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
                <p className="notif-text"><strong>{props.name}</strong> {props.text}</p>
            </div> 
        </div>
    );
}

export default Engagement;
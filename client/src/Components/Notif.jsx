import React from 'react';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Notif = (props) => {
    return (
        <div className="notif-outside row">
            <div className="col-1">
                <FontAwesomeIcon icon={faUserCircle} className="text-light notif-icon"/>
            </div>
            <div className="col-7">
                <p className="notif-text"><strong>{props.name}</strong> {props.text}</p>
            </div>
            <div className="col-4">
                <button className=" btn-notif">view</button>
            </div>
        </div>
    );
}

export default Notif;
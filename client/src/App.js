import React from 'react';
import ReactDOM from 'react-dom'
import Navbar from './Components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import Footer from './Components/Footer';

const App = (props) => {
  return (
    <div className="app">
      <Navbar/>
      <div className="row">

        <div className="nav-block-col">
          <div className="row nav-block text-center">
            <FontAwesomeIcon icon={faChartLine} className="icon"/>
            <p>Dashboard</p>
          </div>
          <div className="row nav-block text-center">
            <FontAwesomeIcon icon={faTasks} className="icon"/>
            <p>Actions</p>
          </div>
          <div className="row nav-block text-center">
            <FontAwesomeIcon icon={faCheckCircle} className="icon"/>
            <p>Check-In</p>
          </div>
          <div className="row nav-block text-center">
            <FontAwesomeIcon icon={faUsers} className="icon"/>
            <p>Directory</p>
          </div>
          <div className="row nav-block text-center">
            <FontAwesomeIcon icon={faBell} className="icon"/>
            <p>Notifications</p>
          </div>
        </div>

        <div className="col-10">
          
        </div>
        <div className="col-1">
          
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default App;

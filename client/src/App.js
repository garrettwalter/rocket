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
import Notif from './Components/Notif';
import Engagement from './Components/Engagement';
import ShoutOut from './Components/ShoutOut';

const App = (props) => {
  return (
    <div className="app">
      <Navbar/>
      <div className="row">

        <div className="float-left nav-block-col">
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

        <div className="content-outside">
          <div className="row">
              <div className="row text-dark title-row">
                <h3 className="mn">Manager Notifications</h3>
                <h3 className="nn">Notifications</h3>
              </div>
              
            <div className="col-lg-7">
              <div className="row subtitle-row">
                <p>Check-ins</p>
              </div>
              <div className="row">
                <Notif/>
                <Notif/>
                <Notif/>
                <Notif/>
              </div>
              <div className="row subtitle-row">
                <p>Overdue Actions</p>
              </div>
              <div className="row">
                <Notif/>
                <Notif/>
              </div>
              <div className="row subtitle-row">
                <p>Completed Activities</p>
              </div>
              <div className="row">
                <Notif/>
                <Notif/>
                <Notif/>
                <Notif/>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="row card-box top-card">
                <div className="row box-title-row">
                  <p className="box-title">Success Engagement's</p>
                </div>
                <div className="row engagement-row">
                <Engagement/>
                <Engagement/>
                <Engagement/>
              </div>
              </div>
              <div className="row card-box">
                <div className="row box-title-row">
                  <p className="box-title">Shout-out's</p>
                </div>
                <div className="row engagement-row">
                <ShoutOut/>
                <ShoutOut/>
                <ShoutOut/>
                <ShoutOut/>
                <ShoutOut/>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default App;

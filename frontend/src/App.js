import React from 'react';
import { Route, Switch } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import MainPage from './containers/MainPage';

function App() {

  const currentDate = '2018-11-01';
  const schedulerData = [
    { startDate: '2018-11-01T09:45', endDate: '2018-11-01T11:00', title: 'Meeting' },
    { startDate: '2018-11-01T12:00', endDate: '2018-11-01T13:30', title: 'Go to a gym' },
  ];

  return (
    <div>
      <Switch>
        <Route path="/" component={MainPage} />
      </Switch>
    </div>
  );

  // return (
  //   <Paper>
  //     <Scheduler
  //       data={schedulerData}
  //     >
  //       <ViewState
  //         currentDate={currentDate}
  //       />
  //       <DayView
  //         startDayHour={9}
  //         endDayHour={14}
  //       />
  //       <Appointments />
  //     </Scheduler>
  //   </Paper>
  // );

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;

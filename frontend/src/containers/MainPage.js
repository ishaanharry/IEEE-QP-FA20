import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { Toolbar as ToolbarUI } from '@material-ui/core';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
    Toolbar,
    DateNavigator,
    Scheduler,
    DayView,
    Appointments,
    TodayButton,
    CurrentTimeIndicator
  } from '@devexpress/dx-react-scheduler-material-ui';
import { makeStyles } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import classNames from 'clsx';

import Leftbar from '../components/PastView/Leftbar.js';
import Topbar from '../components/PresentView/Topbar.js';
import Rightbar from '../components/FutureView/Rightbar.js';

export const appointments = [
  {
    title: 'Website Re-Design Plan',
    startDate: new Date(2018, 6, 23, 9, 30),
    endDate: new Date(2018, 6, 23, 11, 30),
  }, {
    title: 'Book Flights to San Fran for Sales Trip',
    startDate: new Date(2018, 6, 23, 12, 0),
    endDate: new Date(2018, 6, 23, 13, 0),
  },
]


export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: appointments,
    };
  }

  render() {
    const currentDate = '2020-11-14';
    const schedulerData = [
        { startDate: '2020-11-14T09:45', endDate: '2020-11-14T11:00', title: 'Meeting' },
        { startDate: '2020-11-14T12:00', endDate: '2020-11-14T13:30', title: 'Go to a gym' },
    ];
    var userStartHour = 7
    var userEndHour = 22

    const useStyles = makeStyles(theme => ({
      line: {
        height: '2px',
        borderTop: `2px ${teal[500]} solid`,
        width: '100%',
        transform: 'translate(0, -1px)',
      },
      circle: {
        width: theme.spacing(1.5),
        height: theme.spacing(1.5),
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)',
        background: teal[500],
      },
      nowIndicator: {
        position: 'absolute',
        zIndex: 1,
        left: 0,
        top: ({ top }) => top,
      },
    }));
    const TimeIndicator = ({
      top, ...restProps
    }) => {
      const classes = useStyles({ top });
      return (
        <div {...restProps}>
          <div className={classNames(classes.nowIndicator, classes.circle)} />
          <div className={classNames(classes.nowIndicator, classes.line)} />
        </div>
      );
    };
    const { data } = this.state;

    return (
      <div>
      <Leftbar />
      <Topbar />
      <ToolbarUI />
      <Container
            maxWidth={'md'}
      >
        <Scheduler
          data={data}
        >
          <ViewState
            defaultCurrentDate="2018-07-27"
          />
          <DayView />
          <Toolbar />
          <DateNavigator />
          <TodayButton />
          <Appointments />
          <CurrentTimeIndicator
                shadePreviousCells={true}
                shadePreviousAppointments={true}
                indicatorComponent={TimeIndicator}
                />
        </Scheduler>
      </Container>
      <Rightbar />
      </div>
    );
  }
}

/**

import React from 'react';

import Container from '@material-ui/core/Container';
import { Toolbar as ToolbarUI } from '@material-ui/core';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Toolbar,
  DateNavigator,
  Scheduler,
  DayView,
  Appointments,
  TodayButton,
  CurrentTimeIndicator
} from '@devexpress/dx-react-scheduler-material-ui';
import { makeStyles } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import classNames from 'clsx';

import Leftbar from '../components/PastView/Leftbar.js';
import Topbar from '../components/PresentView/Topbar.js';
import Rightbar from '../components/FutureView/Rightbar.js';



class MainPage extends React.PureComponent {
  

constructor(props) {
  super(props);

  this.state = {
    data: appointments,
  };
}

render(){
  
    const currentDate = '2020-11-14';
    const schedulerData = [
        { startDate: '2020-11-14T09:45', endDate: '2020-11-14T11:00', title: 'Meeting' },
        { startDate: '2020-11-14T12:00', endDate: '2020-11-14T13:30', title: 'Go to a gym' },
    ];
    var userStartHour = 7
    var userEndHour = 22

    const useStyles = makeStyles(theme => ({
      line: {
        height: '2px',
        borderTop: `2px ${teal[500]} solid`,
        width: '100%',
        transform: 'translate(0, -1px)',
      },
      circle: {
        width: theme.spacing(1.5),
        height: theme.spacing(1.5),
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)',
        background: teal[500],
      },
      nowIndicator: {
        position: 'absolute',
        zIndex: 1,
        left: 0,
        top: ({ top }) => top,
      },
    }));
    const TimeIndicator = ({
      top, ...restProps
    }) => {
      const classes = useStyles({ top });
      return (
        <div {...restProps}>
          <div className={classNames(classes.nowIndicator, classes.circle)} />
          <div className={classNames(classes.nowIndicator, classes.line)} />
        </div>
      );
    };

    const { data } = this.state;

    return (
        <div>
            <Leftbar />
            <Topbar />
            <ToolbarUI />
            <Container
            maxWidth={'md'}
            >
            <Scheduler
                data={schedulerData}
            >
                <ViewState
                currentDate={currentDate}
                />
                <DayView
                startDayHour={userStartHour - .5}
                endDayHour={userEndHour}
                />
                <Toolbar />
                <DateNavigator />
                <TodayButton />
                <CurrentTimeIndicator
                shadePreviousCells={true}
                shadePreviousAppointments={true}
                indicatorComponent={TimeIndicator}
                />
                <Appointments />
            </Scheduler>
            </Container>
            <Rightbar />
        </div>
    );
}

}

export default MainPage;

*/
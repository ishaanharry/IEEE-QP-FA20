import React from 'react';

import Container from '@material-ui/core/Container';
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

import Past from './PastView/Past.js';
import Future from './FutureView/Future.js';

function MainPage(){
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

    return (
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
            <Appointments />
            <CurrentTimeIndicator
              shadePreviousCells={true}
              shadePreviousAppointments={true}
              indicatorComponent={TimeIndicator}
            />
            <Toolbar />
            <DateNavigator />
            <TodayButton />
          </Scheduler>
        </Container>
    );
}

export default MainPage;
import React from 'react';
import { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Slider from '@material-ui/core/Slider';

import DateFnsUtils from '@date-io/date-fns';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  
});

function Past() {
  const classes = useStyles();

  const [selectedDate, handleDateChange] = useState(new Date());

  const [tag, setTag] = React.useState('');

  const handleChange = (event) => {
    setTag(event.target.value);
  };

  const marks = [
    {
      value: 1,
    },
    {
      value: 2,
    },
    {
      value: 3,
    },
    {
      value: 4,
    },
    {
      value: 5,
    },
  ];

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          What have you done recently?
        </Typography>
      </CardContent>
      <CardActions>
        <form className={classes.root} noValidate autoComplete="off">
          <Grid container spacing={3}>
        
            <Grid item xs={12}>
              <TextField id="filled-basic" label="Task title" variant="filled" fullWidth="true" />
            </Grid>
            <Grid item xs={12}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DateTimePicker
                  label="Start Time"
                  inputVariant="outlined"
                  value={selectedDate}
                  onChange={handleDateChange}
                  onError={console.log}
                  disableFuture
                  format="yyyy/MM/dd HH:mm"
                  minutesStep="5"
                  fullWidth="true"
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={12}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DateTimePicker
                  label="End Time"
                  inputVariant="outlined"
                  value={selectedDate}
                  onChange={handleDateChange}
                  onError={console.log}
                  disableFuture
                  format="yyyy/MM/dd HH:mm"
                  minutesStep="5"
                  fullWidth="true"
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={12}>
              <FormControl variant="outlined" className={classes.formControl} fullWidth="true">
                <InputLabel id="demo-simple-select-outlined-label">Tag</InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={tag}
                    onChange={handleChange}
                    label="Tag"
                    labelWidth="275"
                  >
                  <MenuItem value={0}>
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>Productivity</MenuItem>
                  <MenuItem value={2}>Wellness</MenuItem>
                  <MenuItem value={3}>Professional</MenuItem>
                  <MenuItem value={4}>Social</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth="true">Log Task</Button>
            </Grid>
          </Grid>
          
        </form>
      </CardActions>
    </Card>
  );
}


export default Past;
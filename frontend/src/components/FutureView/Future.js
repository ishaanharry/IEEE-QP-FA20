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
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import InputAdornment from '@material-ui/core/InputAdornment';

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

function Future() {
  const classes = useStyles();

  const [selectedDate, handleDateChange] = useState(new Date());

  const [tag, setTag] = React.useState('');

  const [state, setState] = React.useState({
    checkedA: true,
  });

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
          What are you planning on doing?
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
                  label="Start of Timeframe"
                  inputVariant="outlined"
                  value={selectedDate}
                  onChange={handleDateChange}
                  onError={console.log}
                  disablePast
                  format="yyyy/MM/dd HH:mm"
                  minutesStep="5"
                  fullWidth="true"
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={12}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DateTimePicker
                  label="End of Timeframe"
                  inputVariant="outlined"
                  value={selectedDate}
                  onChange={handleDateChange}
                  onError={console.log}
                  disablePast
                  format="yyyy/MM/dd HH:mm"
                  minutesStep="5"
                  fullWidth="true"
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={5}>
              <TextField
                id="outlined-number"
                label="Duration"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  endAdornment: <InputAdornment position="end">hours</InputAdornment>,
                  inputProps: { 
                      min: 0,
                      step: 0.5
                  }
                }}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={7}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedB}
                    onChange={handleChange}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="Entire Timeframe"
              />
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
              <Button variant="contained" fullWidth="true">Plan Task</Button>
            </Grid>
          </Grid>
          
        </form>
      </CardActions>
    </Card>
  );
}


export default Future;
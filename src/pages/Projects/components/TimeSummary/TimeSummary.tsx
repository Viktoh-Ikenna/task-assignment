import React from 'react';
import {Box, Typography} from '@mui/material';
import useStyles from './styles';

const TimeSummary = () => {
     const classes = useStyles();

     return (
          <Box>
               <Typography variant="h6" className={classes.title}>
                    Time
               </Typography>
               <Box className={classes.summaryBox}>
                    <Typography variant="h5" className={classes.totalHours}>
                         23.7 hours
                    </Typography>
                    <Typography className={classes.change}>2.5% from last week</Typography>
               </Box>
          </Box>
     );
};

export default TimeSummary;

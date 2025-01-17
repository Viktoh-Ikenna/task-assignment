import {makeStyles} from '@mui/styles';
import {Theme} from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) => ({
     title: {
          fontWeight: 'bold',
          marginBottom: theme.spacing(2),
     },
     summaryBox: {
          padding: theme.spacing(2),
          borderRadius: theme.shape.borderRadius,
          backgroundColor: theme.palette.action.hover,
     },
     totalHours: {
          fontWeight: 'bold',
     },
     change: {
          marginTop: theme.spacing(1),
          color: theme.palette.success.main,
     },
}));

export default useStyles;

import {makeStyles} from '@mui/styles';

const useStyles = makeStyles((theme: any) => ({
     calendarContainer: {
          backgroundColor: theme.palette.background.default,
          borderRadius: '12px',
          padding: '16px',
          boxShadow: '0px 6px 16px rgba(0, 0, 0, 0.12)',
     },
     calendarHeader: {
          fontWeight: 'bold',
          marginBottom: '16px',
          color: theme.palette.text.primary,
     },
     eventText: {
          fontWeight: 'bold',
          fontSize: '12px',
     },
}));

export default useStyles;

import {makeStyles} from '@mui/styles';

const useStyles = makeStyles({
     title: {
          fontWeight: 'bold',
          marginBottom: '16px',
     },
     memberItem: {
          display: 'flex',
          alignItems: 'center',
          marginBottom: '12px',
     },
     avatar: {
          width: '40px',
          height: '40px',
          marginRight: '16px',
     },
     memberName: {
          fontWeight: '500',
     },
     status: {
          fontSize: '0.875rem',
     },
     online: {
          color: '#4CAF50',
     },
     offline: {
          color: '#FF5252',
     },
});

export default useStyles;

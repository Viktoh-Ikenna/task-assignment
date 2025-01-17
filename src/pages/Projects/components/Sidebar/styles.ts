import {makeStyles} from '@mui/styles';
import {Theme} from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) => ({
     sidebar: {
          width: 350,
          height: 'calc(100vh - 75px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: theme.spacing(2),
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
          border: '1px solid #ebebeb',
          borderBottom: 0,
     },
     addProjectButton: {
          border: '2px dashed #9AC2F9 !important',
          color: '#4C9AFF !important',
          padding: '10px 20px',
          borderRadius: '8px',
          textTransform: 'none',
          fontWeight: 600,
          fontSize: '14px !important',
          lineHeight: '20px',
          '&:hover': {
               backgroundColor: '#F0F8FF !important',
               borderColor: '#4C9AFF !important',
          },
     },
}));

export default useStyles;

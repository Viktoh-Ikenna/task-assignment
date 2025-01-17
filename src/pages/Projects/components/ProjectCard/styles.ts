import {makeStyles} from '@mui/styles';
import {Theme} from '@mui/material/styles';

interface StyleProps {
     isActive: boolean;
}

const useStyles = makeStyles<Theme, StyleProps>(theme => ({
     card: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: theme.spacing(1.5),
          backgroundColor: props =>
               props.isActive ? theme.palette.primary.main : theme.palette.background.default,
          borderRadius: theme.shape.borderRadius,
          color: props =>
               props.isActive ? theme.palette.primary.contrastText : theme.palette.text.primary,
          boxShadow: props => (props.isActive ? '0px 4px 6px rgba(0, 0, 0, 0.1)' : 'none'),
          '&:hover': {
               backgroundColor: props =>
                    props.isActive ? theme.palette.primary.dark : theme.palette.action.hover,
          },
          transition: 'background-color 0.3s ease',
          gap: 8,
          cursor: 'pointer',
     },
     icon: {
          width: 32,
          height: 32,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: theme.palette.background.paper,
          borderRadius: '50%',
          padding: theme.spacing(0.5),
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
     },
     name: {
          flex: 1,
          marginLeft: theme.spacing(1.5),
          fontWeight: 'bold',
          fontSize: '1rem',
     },
     menuButton: {
          color: 'inherit',
     },
}));

export default useStyles;

import {makeStyles} from '@mui/styles';
import {Theme} from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) => ({
     title: {
          fontWeight: 'bold',
          marginBottom: theme.spacing(2),
     },
     projectItem: {
          borderRadius: `${theme.shape.borderRadius} !important`,
          padding: theme.spacing(1, 2),
          marginBottom: theme.spacing(1),
          '&:hover': {
               backgroundColor: `${theme.palette.action.hover} !important`,
          },
     },
     activeProject: {
          backgroundColor: theme.palette.primary.light,
          color: theme.palette.primary.contrastText,
     },
}));

export default useStyles;

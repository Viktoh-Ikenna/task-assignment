import {makeStyles} from '@mui/styles';

const useStyles = makeStyles((theme: any) => ({
     modalContainer: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '400px',
          backgroundColor: `${theme.palette?.background?.paper} !important`,
          borderRadius: '8px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1) !important',
          padding: '24px',
          outline: 'none',
     },
     modalTitle: {
          fontWeight: 'bold',
          marginBottom: '16px',
          textAlign: 'center',
     },
     inputContainer: {
          position: 'relative',
     },
     input: {
          width: '100%',
          marginBottom: '8px',
     },
     dropdown: {
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: `${theme?.palette?.background?.paper} !important`,
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1) !important',
          borderRadius: '4px',
          maxHeight: '200px',
          overflowY: 'auto',
          zIndex: 1000,
     },
     chip: {
          margin: '4px',
          fontWeight: 'bold',
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          '& .MuiAvatar-root': {
               width: '24px',
               height: '24px',
               fontSize: '12px',
               backgroundColor: theme.palette.secondary.main,
               color: theme.palette.secondary.contrastText,
          },
          '&:hover': {
               backgroundColor: theme.palette.action.hover,
          },
     },
     listItem: {
          display: 'flex',
          alignItems: 'center',
          padding: '8px 16px !important',
          cursor: 'pointer',
          '&:hover': {
               backgroundColor: `${theme.palette?.action?.hover} !important`,
          },
          '&.selected': {
               backgroundColor: `${theme.palette?.action?.selected} !important`,
          },
     },
     avatar: {
          marginRight: '12px',
     },
     addButton: {
          backgroundColor: theme.palette?.primary?.main,
          color: theme.palette?.primary?.contrastText,
          textTransform: 'none',
          fontWeight: 'bold',
          '&:hover': {
               backgroundColor: `${theme.palette.primary.dark} !important`,
          },
          '&:disabled': {
               backgroundColor: theme.palette.action?.disabledBackground,
               color: theme.palette.text.disabled,
          },
     },
     cancelButton: {
          backgroundColor: `${theme.palette.grey[300]} !important`,
          color: `${theme.palette.text.primary} !important`,
          textTransform: 'none',
          fontWeight: 'bold',
          '&:hover': {
               backgroundColor: theme.palette.grey[400],
          },
     },
}));

export default useStyles;

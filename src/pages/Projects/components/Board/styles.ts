import {makeStyles} from '@mui/styles';

const useStyles = makeStyles((theme: any) => ({
     boardContainer: {
          padding: '16px',
          backgroundColor: theme.palette.background.default,
          minHeight: '100vh',
     },

     columnHeader: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '16px',
          padding: '0 8px', // Ensures alignment
     },
     columnIndicator: {
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          marginRight: '8px',
     },
     columnTitle: {
          display: 'flex',
          alignItems: 'center',
          fontWeight: 'bold',
          color: theme.palette.text.primary,
          fontSize: '16px',
     },
     taskCount: {
          fontSize: '14px',
          color: theme.palette.text.secondary,
          marginLeft: '8px',
     },
     optionsIconH: {
          color: theme.palette.text.secondary,
          cursor: 'pointer',
          transition: 'color 0.3s',
          '&:hover': {
               color: theme.palette.text.primary,
          },
     },
     columnBody: {
          backgroundColor: theme.palette.background.paper,
          borderRadius: '12px',
          padding: '16px',
          minHeight: '400px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)',
          transition: 'background-color 0.3s, box-shadow 0.3s',
     },
     draggingOver: {
          backgroundColor: theme.palette.action.hover,
          transition: 'background-color 0.3s',
     },
     addTaskButton: {
          width: '100%',
          padding: '8px 0',
          backgroundColor: `${theme.palette.background.paper} !important`,
          color: `${theme.palette.primary.main} !important`,
          fontWeight: 'bold',
          fontSize: '14px',
          border: '1px solid rgba(0, 0, 0, 0.1) !important',
          borderRadius: '8px',
          boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1) !important',
          textTransform: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '4px',
          transition: 'all 0.3s ease',
          '&:hover': {
               backgroundColor: `${theme.palette.primary.light} !important`,
               color: `${theme.palette.primary.contrastText} !important`,
               boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2) !important',
          },
     },
     taskCard: {
          padding: '16px',
          borderRadius: '12px',
          backgroundColor: theme.palette.background.paper,
          boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15) !important',
          marginBottom: '16px',
          //   width: '280px',
          transition: 'box-shadow 0.3s, transform 0.2s',
          '&:hover': {
               boxShadow: '0px 6px 16px rgba(0, 0, 0, 0.2)',
          },
     },
     dragging: {
          transform: 'scale(1.03)',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
     },
     taskTagContainer: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '8px',
     },
     taskTag: {
          fontWeight: 'bold',
          fontSize: '12px',
          borderRadius: '6px',
          padding: '4px 12px',
          backgroundColor: theme.palette.secondary.light,
          color: theme.palette.secondary.contrastText,
     },
     taskTitle: {
          fontWeight: 'bold',
          fontSize: '16px',
          marginBottom: '8px',
          color: theme.palette.text.primary,
     },
     taskDescription: {
          fontSize: '14px',
          color: theme.palette.text.secondary,
          marginBottom: '16px',
     },
     progressContainer: {
          marginBottom: '16px',
          display: 'flex',
          justifyContent: 'flex-start',
     },
     progressChip: {
          backgroundColor: '#DEF7E5',
          color: '#1DB954',
          fontWeight: 'bold',
          fontSize: '12px',
          height: '24px',
          borderRadius: '12px',
     },
     taskFooter: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '12px',
     },
     avatarGroup: {
          display: 'flex',
          gap: '-8px',
     },
     taskAvatar: {
          width: '28px',
          height: '28px',
          border: '2px solid #FFFFFF',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
     },
     taskMeta: {
          display: 'flex',
          gap: '12px',
          alignItems: 'center',
          color: theme.palette.text.secondary,
     },
     iconContainer: {
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          color: theme.palette.text.secondary,
     },
     metaIcon: {
          color: theme.palette.text.secondary,
     },
     cardHeader: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '12px',
     },
     optionsIcon: {
          color: theme.palette.text.secondary,
          cursor: 'pointer',
          transition: 'color 0.3s',
          '&:hover': {
               color: theme.palette.text.primary,
          },
     },
}));

export default useStyles;

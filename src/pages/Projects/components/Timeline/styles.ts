import {makeStyles} from '@mui/styles';

const useStyles = makeStyles((theme: any) => ({
     timelineContainer: {
          backgroundColor: theme.palette.background.default,
          padding: '24px',
          borderRadius: '12px',
          boxShadow: '0px 6px 16px rgba(0, 0, 0, 0.12)',
     },
     timelineHeader: {
          fontWeight: 'bold',
          marginBottom: '16px',
          color: theme.palette.text.primary,
     },
     timelineCard: {
          padding: '16px',
          borderRadius: '12px',
          backgroundColor: theme.palette.background.paper,
          boxShadow: '0px 6px 16px rgba(0, 0, 0, 0.12)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
               transform: 'translateY(-4px)',
               boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.18)',
          },
     },
     taskTitle: {
          fontWeight: 'bold',
          color: theme.palette.text.primary,
          marginBottom: '8px',
     },
     taskDescription: {
          color: theme.palette.text.secondary,
     },
     avatar: {
          width: 32,
          height: 32,
          fontSize: '14px',
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.secondary.contrastText,
     },
     assigneeChip: {
          backgroundColor: theme.palette.secondary.light,
          color: theme.palette.secondary.contrastText,
          fontWeight: 'bold',
          fontSize: '12px',
     },
     progressBar: {
          height: '8px',
          borderRadius: '4px',
          marginTop: '8px',
          backgroundColor: theme.palette.grey[200],
          '& .MuiLinearProgress-bar': {
               backgroundColor: theme.palette.primary.main,
          },
     },
     progressText: {
          marginTop: '4px',
          color: theme.palette.text.secondary,
     },
}));

export default useStyles;

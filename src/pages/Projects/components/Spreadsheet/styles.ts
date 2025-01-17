import {makeStyles} from '@mui/styles';

const useStyles = makeStyles((theme: any) => ({
     groupHeader: {
          color: '#555',
          fontWeight: 'bold',
          fontSize: '16px',
     },
     tableContainer: {
          marginTop: 8,
          borderRadius: 8,
          border: '1px solid #E0E0E0',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
     },
     tableHeader: {
          fontWeight: 'bold',
          color: '#333',
          backgroundColor: '#F9FAFB',
     },
     tableCell: {
          color: '#555',
          fontSize: '14px',
     },
     mainTask: {
          fontWeight: 'bold',
          fontSize: '14px',
          color: '#6C63FF',
     },
     avatar: {
          width: '28px',
          height: '28px',
          fontSize: '12px',
     },
     priorityBadge: {
          borderRadius: '8px',
          padding: '2px 8px',
          fontSize: '12px',
          fontWeight: 'bold',
     },
     urgent: {
          backgroundColor: '#FF6F61',
          color: '#FFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
     },
     normal: {
          backgroundColor: '#4CAF50',
          color: '#555',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
     },
     progressBar: {
          height: '8px',
          borderRadius: '4px',
     },
     low: {
          backgroundColor: '#6C63FF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
     },
}));

export default useStyles;

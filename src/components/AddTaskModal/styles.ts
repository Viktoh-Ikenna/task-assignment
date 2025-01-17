import {makeStyles} from '@mui/styles';

const useStyles = makeStyles({
     modalContainer: {
          display: 'flex',
          flexDirection: 'row',
          width: '800px',
          backgroundColor: '#fff',
          borderRadius: '12px',
          margin: 'auto',
          marginTop: '5%',
          padding: '24px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          fontFamily: 'Roboto, sans-serif',
     },
     leftSection: {
          flex: 1,
          paddingRight: '16px',
     },
     rightSection: {
          flex: 0.8,
          paddingLeft: '16px',
          borderLeft: '1px solid #E0E0E0',
     },
     header: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '16px',
     },
     taskInput: {
          marginBottom: '16px',
     },
     descriptionInput: {
          marginBottom: '16px',
     },
     sectionTitle: {
          marginTop: '16px',
          marginBottom: '8px',
          fontWeight: 500,
          color: '#555',
     },
     subtaskItem: {
          display: 'flex',
          alignItems: 'center',
          marginBottom: '8px',
     },
     subtaskInput: {
          marginBottom: '16px',
     },
     attachmentItem: {
          display: 'flex',
          alignItems: 'center',
          marginTop: '8px',
          color: '#555',
          fontSize: '14px',
     },
     assignees: {
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
          marginTop: '8px',
     },
     saveButton: {
          marginTop: '24px',
          height: '48px',
          fontWeight: 'bold',
          textTransform: 'none',
          borderRadius: '8px',
          backgroundColor: '#4C9AFF',
          color: '#fff',
          '&:hover': {
               backgroundColor: '#3B82F6',
          },
     },
     addAttachment: {
          marginTop: '10px',
          fontWeight: 500,
          borderRadius: '8px',
          borderColor: '#6C63FF',
          color: '#6C63FF',
          '&:hover': {
               backgroundColor: '#f5f5ff',
          },
     },
});

export default useStyles;

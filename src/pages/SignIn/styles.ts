import {makeStyles} from '@mui/styles';

const useStyles = makeStyles({
     container: {
          display: 'flex',
          minHeight: '100vh',
     },
     formContainer: {
          flex: 1,
          padding: '40px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
     },
     title: {
          fontWeight: 600,
          marginBottom: '16px',
     },
     subtitle: {
          color: '#6c6c6c',
          marginBottom: '32px',
     },
     form: {
          maxWidth: '400px',
     },
     options: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '16px',
     },
     forgotPassword: {
          cursor: 'pointer',
          color: '#6C63FF !important',
          '&:hover': {
               textDecoration: 'underline !important',
          },
     },
     submitButton: {
          marginTop: '16px',
          height: '48px',
          backgroundColor: '#6C63FF !important',
          '&:hover': {
               backgroundColor: '#5548cc !important',
          },
     },
     or: {
          textAlign: 'center',
          margin: '16px 0',
     },
     googleButton: {
          borderColor: '#d3d3d3 !important',
          color: '#555',
          height: '48px',
          '&:hover': {
               borderColor: '#b0b0b0 !important',
          },
     },
     register: {
          marginTop: '16px',
          textAlign: 'center',
     },
     registerLink: {
          color: '#6C63FF !important',
          cursor: 'pointer',
          '&:hover': {
               textDecoration: 'underline !important',
          },
     },
     imageContainer: {
          flex: 1,
          background: 'url(/path-to-image-or-svg.png) center/cover no-repeat',
          backgroundColor: '#6C63FF !important',
     },
});

export default useStyles;

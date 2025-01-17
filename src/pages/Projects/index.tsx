import {Box} from '@mui/material';
import Sidebar from './components/Sidebar/Sidebar';
import {Outlet} from 'react-router-dom';

const Projects = () => {
     return (
          <Box display="flex" height="100vh">
               <Sidebar />
               <Outlet />
          </Box>
     );
};

export default Projects;

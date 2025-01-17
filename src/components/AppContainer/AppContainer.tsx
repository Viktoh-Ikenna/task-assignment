import React, {useEffect, useState} from 'react';
import {Box, CircularProgress, CssBaseline, Toolbar} from '@mui/material';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import {Navigate, Outlet, useNavigate} from 'react-router-dom';
import {AppContext} from '../../context/AppContext';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import AddMemberModal from '../AddMemberModal/AddMemberModal';
import {useAuth} from '../../hooks/useAuth';
import axios from 'axios';
import {Company} from '../../types';
import AddTaskModal from '../AddTaskModal/AddTaskModal';

const AppContainer: React.FC = () => {
     const {
          state,
          handleToggleAddMemberModal,
          isAddMemberModalOpen,
          dispatch,
          isAddTaskModalOpen,
          handleToggleAddTaskModal,
          selectedProjectId,
     } = React.useContext(AppContext);
     const {isAuthenticated, loading} = useAuth();
     const navigate = useNavigate();

     const theme = React.useMemo(
          () =>
               createTheme({
                    palette: {
                         mode: state.theme,
                    },
               }),
          [state.theme],
     );

     useEffect(() => {
          const currentCompany = localStorage.getItem('currentCompany');
          if (!currentCompany && isAuthenticated) {
               navigate('/select-company');
          } else if (currentCompany && isAuthenticated) {
               loadCompany(currentCompany);
          }
     }, [isAuthenticated]);

     const loadCompany = async (companyId: string) => {
          const response = await axios.get('/app_state.json');
          const companies = response.data.companies;

          const selectedCompany = companies.find((company: Company) => company.id === companyId);
          dispatch({
               type: 'SET_COMPANY_DETAILS',
               payload: selectedCompany,
          });
     };

     if (loading) {
          return (
               <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                    <CircularProgress />
               </Box>
          );
     }

     if (!isAuthenticated) {
          return <Navigate to="/signin" replace />;
     }

     return (
          <ThemeProvider theme={theme}>
               <CssBaseline />
               <Box sx={{display: 'flex', minHeight: '100vh'}}>
                    <Sidebar />

                    <Box sx={{flexGrow: 1, display: 'flex', flexDirection: 'column'}}>
                         <Navbar />
                         {/* <Toolbar /> */}
                         <Box sx={{flexGrow: 1}}>
                              <Outlet />
                         </Box>
                    </Box>
               </Box>
               <AddMemberModal open={isAddMemberModalOpen} onClose={handleToggleAddMemberModal} />
               <AddTaskModal
                    open={isAddTaskModalOpen}
                    onClose={handleToggleAddTaskModal}
                    projectId={selectedProjectId}
               />
          </ThemeProvider>
     );
};

export default AppContainer;

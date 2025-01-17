import React, {useContext} from 'react';
import {
     Box,
     Typography,
     List,
     ListItem,
     Button,
     ListItemAvatar,
     Avatar,
     ListItemText,
     CircularProgress,
} from '@mui/material';
import {Navigate, useNavigate} from 'react-router-dom';
import {AppContext} from '../../context/AppContext';
import {Company} from '../../types';
import axios from 'axios';
import {useAuth} from '../../hooks/useAuth';

const CompanySelection = () => {
     const {state, dispatch} = useContext(AppContext);
     const {isAuthenticated, loading} = useAuth();
     const navigate = useNavigate();

     if (loading) {
          return (
               <div
                    style={{
                         width: '100%',
                         height: '100%',
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'center',
                    }}>
                    <CircularProgress />
               </div>
          );
     }
     
     if (!isAuthenticated && !loading) {
          return <Navigate to={'/signin'} />;
     }

     const handleCompanySelect = async (companyId: string) => {
          try {
               const response = await axios.get('/app_state.json');
               const companies = response.data.companies;

               const selectedCompany = companies.find(
                    (company: Company) => company.id === companyId,
               );

               if (selectedCompany) {
                    localStorage.setItem('currentCompany', companyId);
                    dispatch({
                         type: 'SET_COMPANY_DETAILS',
                         payload: selectedCompany,
                    });
                    navigate('/projects');
               } else {
                    console.error('Company not found');
               }
          } catch (error) {
               console.error('Error fetching companies:', error);
          }
     };

     return (
          <Box
               sx={{
                    width: '100%',
                    maxWidth: '500px',
                    margin: 'auto',
                    padding: '24px',
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                    textAlign: 'center',
                    marginTop: '10%',
               }}>
               <Typography variant="h4" sx={{marginBottom: 3, fontWeight: 'bold'}}>
                    Select Your Company
               </Typography>
               <Typography variant="body1" sx={{color: 'text.secondary', marginBottom: 3}}>
                    Please choose the company you wish to manage.
               </Typography>
               <List
                    sx={{
                         maxHeight: '400px',
                         overflowY: 'auto',
                         border: '1px solid #f0f0f0',
                         borderRadius: '8px',
                         marginBottom: 3,
                    }}>
                    {state.currentUser?.company.map(company => (
                         <ListItem
                              key={company.companyId}
                              onClick={() => handleCompanySelect(company.companyId)}
                              sx={{
                                   cursor: 'pointer',
                                   padding: '16px',
                                   '&:hover': {
                                        backgroundColor: '#f5f5f5',
                                   },
                              }}>
                              <ListItemAvatar>
                                   <Avatar sx={{bgcolor: '#6C63FF'}}>
                                        {company.name?.[0]?.toUpperCase()}
                                   </Avatar>
                              </ListItemAvatar>
                              <ListItemText
                                   primary={company.name}
                                   primaryTypographyProps={{
                                        fontWeight: 'medium',
                                   }}
                              />
                         </ListItem>
                    ))}
               </List>
               <Button
                    onClick={() => navigate('/signin')}
                    variant="outlined"
                    color="primary"
                    sx={{
                         padding: '10px 24px',
                         fontWeight: 'bold',
                         borderRadius: '8px',
                    }}>
                    Back
               </Button>
          </Box>
     );
};

export default CompanySelection;

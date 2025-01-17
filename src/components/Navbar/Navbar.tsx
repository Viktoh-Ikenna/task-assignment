import React from 'react';
import {AppBar, Toolbar, Typography, Box, IconButton, Badge, Avatar} from '@mui/material';
import {useTheme} from '@mui/material/styles';
import {AiOutlineBell, AiOutlineSun, AiOutlineMoon} from 'react-icons/ai';
import {AppContext} from '../../context/AppContext';

const Navbar = () => {
     const {state, dispatch} = React.useContext(AppContext);
     const theme = useTheme();

     const toggleTheme = () => {
          dispatch({type: 'TOGGLE_THEME'});
     };

     return (
          <AppBar
               position="static"
               elevation={0}
               sx={{
                    backgroundColor: theme.palette.background.default,
                    color: theme.palette.text.primary,
                    padding: '0 16px',
                    boxShadow: 'none',
                    borderBottom: `1px solid ${theme.palette.divider}`,
               }}>
               <Toolbar
                    sx={{
                         display: 'flex',
                         justifyContent: 'space-between',
                         padding: '0 !important',
                    }}>
                    <Typography variant="h6" sx={{fontWeight: 'bold'}}>
                         Dashboard
                    </Typography>

                    <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
                         <IconButton onClick={toggleTheme} sx={{color: theme.palette.text.primary}}>
                              {state.theme === 'dark' ? (
                                   <AiOutlineSun size={20} />
                              ) : (
                                   <AiOutlineMoon size={20} />
                              )}
                         </IconButton>

                         <IconButton sx={{color: theme.palette.text.primary}}>
                              <Badge
                                   badgeContent={10}
                                   color="error"
                                   sx={{
                                        '& .MuiBadge-badge': {
                                             fontSize: '0.75rem',
                                             height: 18,
                                             minWidth: 18,
                                        },
                                   }}>
                                   <AiOutlineBell size={20} />
                              </Badge>
                         </IconButton>

                         <Avatar
                              alt="User Profile"
                              src="https://via.placeholder.com/150"
                              sx={{width: 32, height: 32}}
                         />
                    </Box>
               </Toolbar>
          </AppBar>
     );
};

export default Navbar;

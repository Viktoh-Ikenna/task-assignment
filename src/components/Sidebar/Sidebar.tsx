import React, {useState} from 'react';
import {
     Box,
     Drawer,
     List,
     ListItem,
     ListItemIcon,
     ListItemText,
     IconButton,
     useTheme,
     Divider,
     Typography,
} from '@mui/material';
import {
     AiOutlineDashboard,
     AiOutlineClockCircle,
     AiOutlineCalendar,
     AiOutlineBarChart,
     AiOutlineMessage,
     AiOutlineQuestionCircle,
     AiOutlineLogout,
     AiOutlineMenu,
} from 'react-icons/ai';
import {Link, useLocation} from 'react-router-dom';
import {GoSidebarCollapse, GoSidebarExpand} from 'react-icons/go';
import {FiSquare} from 'react-icons/fi';

const Sidebar = () => {
     const [collapsed, setCollapsed] = useState(true);
     const [hideTexts, setHideTexts] = useState(true);
     const location = useLocation(); // Get the current route
     const theme = useTheme();

     const drawerWidth = collapsed ? 80 : 240;

     const toggleSidebar = () => {
          setCollapsed(!collapsed);
          if (!collapsed) {
               setTimeout(() => {
                    setHideTexts(true);
               }, 250);
          } else {
               setHideTexts(false);
          }
     };

     const menuItems = [
          {icon: <AiOutlineDashboard size={collapsed ? 30 : 24} />, label: 'Dashboard', path: '/'},
          {
               icon: <FiSquare size={collapsed ? 30 : 24} />,
               label: 'Projects',
               path: '/projects',
          },
          {
               icon: <AiOutlineCalendar size={collapsed ? 30 : 24} />,
               label: 'Calendar',
               path: '/calendar',
          },
          {
               icon: <AiOutlineBarChart size={collapsed ? 30 : 24} />,
               label: 'Analytics',
               path: '/analytics',
          },
          {icon: <AiOutlineMessage size={collapsed ? 30 : 24} />, label: 'Chat', path: '/chat'},
          {
               icon: <AiOutlineQuestionCircle size={collapsed ? 30 : 24} />,
               label: 'Help',
               path: '/help',
          },
     ];

     return (
          <div style={{position: 'relative'}}>
               <Box
                    sx={{
                         display: 'flex',
                         justifyContent: 'center',
                         alignItems: 'center',
                         position: 'absolute',
                         left: '100%',
                         zIndex: 1000000,
                         marginLeft: '-25px',
                         backgroundColor: theme.palette.background.default,
                         color: theme.palette.text.primary,
                         padding: 0,
                         borderRadius: '0px 8px 8px 0px',
                         marginTop: '12px',
                    }}>
                    <IconButton onClick={toggleSidebar}>
                         {collapsed ? <GoSidebarExpand /> : <GoSidebarCollapse />}
                    </IconButton>
               </Box>
               <Drawer
                    variant="permanent"
                    sx={{
                         width: drawerWidth,
                         flexShrink: 0,
                         [`& .MuiDrawer-paper`]: {
                              width: drawerWidth,
                              boxSizing: 'border-box',
                              backgroundColor: theme.palette.background.default,
                              color: theme.palette.text.primary,
                              transition: 'width 0.3s ease-in-out',
                         },
                    }}>
                    <Box
                         sx={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              height: 64,
                              borderBottom: `1px solid ${theme.palette.divider}`,
                         }}>
                         <Typography
                              variant="h6"
                              sx={{
                                   fontWeight: 'bold',
                                   fontSize: collapsed ? '24px' : '20px',
                                   color: theme.palette.primary.main,
                              }}>
                              {collapsed ? 'A' : 'AppLogo'}
                         </Typography>
                    </Box>

                    <List>
                         {menuItems.map(({icon, label, path}, index) => {
                              const isActive = location.pathname === path;
                              return (
                                   <ListItem
                                        key={index}
                                        component={Link}
                                        to={path}
                                        sx={{
                                             display: 'flex',
                                             alignItems: 'center',
                                             padding: collapsed ? '12px 16px' : '10px 16px',
                                             gap: '8px',
                                             backgroundColor: isActive
                                                  ? theme.palette.action.selected
                                                  : 'transparent',
                                             '&:hover': {
                                                  backgroundColor: theme.palette.action.hover,
                                             },
                                             borderRadius: '8px', 
                                        }}>
                                        <ListItemIcon
                                             sx={{
                                                  minWidth: 40,
                                                  justifyContent: 'center',
                                                  color: isActive
                                                       ? theme.palette.primary.main
                                                       : theme.palette.text.secondary,
                                             }}>
                                             {icon}
                                        </ListItemIcon>
                                        {!hideTexts && (
                                             <ListItemText
                                                  primary={label}
                                                  sx={{
                                                       color: isActive
                                                            ? theme.palette.primary.main
                                                            : theme.palette.text.secondary, 
                                                  }}
                                             />
                                        )}
                                   </ListItem>
                              );
                         })}
                    </List>

                    {/* Divider */}
                    <Divider sx={{margin: 'auto 0'}} />

                    {/* Logout Icon */}
                    <List>
                         <ListItem
                              component={Link}
                              to="/logout"
                              sx={{
                                   display: 'flex',
                                   alignItems: 'center',
                                   padding: '10px 16px',
                                   gap: '16px',
                                   '&:hover': {
                                        backgroundColor: theme.palette.action.hover,
                                   },
                              }}>
                              <ListItemIcon
                                   sx={{
                                        minWidth: 40,
                                        justifyContent: 'center',
                                        color: theme.palette.error.main,
                                   }}>
                                   <AiOutlineLogout size={24} />
                              </ListItemIcon>
                              {!collapsed && (
                                   <ListItemText
                                        primary="Logout"
                                        sx={{color: theme.palette.error.main}}
                                   />
                              )}
                         </ListItem>
                    </List>
               </Drawer>
          </div>
     );
};

export default Sidebar;

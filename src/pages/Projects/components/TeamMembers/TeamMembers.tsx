import React, {useContext} from 'react';
import {Box, List, ListItem, Typography, Avatar} from '@mui/material';
import {AppContext} from '../../../../context/AppContext';
import useStyles from './styles';

const TeamMembers = () => {
     const {state} = useContext(AppContext);
     const classes = useStyles();

     const teamMembers = state.currentCompany?.teams || [];

     if (teamMembers.length === 0) {
          return (
               <Typography variant="body1" color="textSecondary" align="center">
                    No team members found for {state.currentCompany?.name}.
               </Typography>
          );
     }

     return (
          <Box>
               <Typography variant="h6" className={classes.title}>
                    Team Members
               </Typography>
               <List>
                    {teamMembers.map((member, index) => (
                         <ListItem key={index} className={classes.memberItem}>
                              <Avatar src={member.avatar} className={classes.avatar}>
                                   {member.name.charAt(0).toUpperCase()}
                              </Avatar>
                              <Box>
                                   <Typography variant="body1" className={classes.memberName}>
                                        {member.name}
                                   </Typography>
                                   <Typography variant="body2" className={classes.status}>
                                        {member.role || 'Member'}
                                   </Typography>
                              </Box>
                         </ListItem>
                    ))}
               </List>
          </Box>
     );
};

export default TeamMembers;

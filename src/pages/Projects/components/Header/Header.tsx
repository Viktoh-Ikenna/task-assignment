import React, {useContext} from 'react';
import {Box, Typography, Button, Avatar, AvatarGroup} from '@mui/material';
import {AppContext} from '../../../../context/AppContext';

const Header = ({projectId}: {projectId: string}) => {
     const {state, handleToggleAddMemberModal} = useContext(AppContext);

     const project = state.currentCompany?.projects.find(project => project.id === projectId);

     if (!project) {
          return (
               <Box padding={2} textAlign="center">
                    <Typography variant="h6" color="textSecondary">
                         No project found
                    </Typography>
               </Box>
          );
     }

     return (
          <Box
               display="flex"
               justifyContent="space-between"
               alignItems="center"
               padding={2}
               borderBottom="1px solid #e0e0e0">
               <Box display="flex" alignItems="center" gap={2}>
                    <Avatar
                         src="https://via.placeholder.com/50"
                         alt="Project Icon"
                         sx={{width: 50, height: 50}}
                    />
                    <Box>
                         <Typography variant="h6" fontWeight="bold">
                              {project.name}
                         </Typography>
                    </Box>
               </Box>

               <Box display="flex" alignItems="center" gap={2}>
                    <AvatarGroup max={4}>
                         {project.members.map((member, index) => (
                              <Avatar
                                   key={index}
                                   alt={member.name}
                                   src={member.avatar}
                                   sx={{
                                        backgroundColor: '#6C63FF',
                                        fontSize: 12,
                                        fontWeight: 600,
                                   }}>
                                   {member.name
                                        .split(' ')
                                        .map(word => word[0])
                                        .join('')}
                              </Avatar>
                         ))}
                    </AvatarGroup>
                    <Button
                         variant="outlined"
                         sx={{
                              textTransform: 'none',
                              borderColor: '#4C9AFF',
                              color: '#4C9AFF',
                              borderRadius: '20px',
                              padding: '6px 12px',
                              fontWeight: 600,
                              '&:hover': {
                                   backgroundColor: '#F0F8FF',
                              },
                         }}
                         onClick={handleToggleAddMemberModal}>
                         + Add Member
                    </Button>
               </Box>
          </Box>
     );
};

export default Header;

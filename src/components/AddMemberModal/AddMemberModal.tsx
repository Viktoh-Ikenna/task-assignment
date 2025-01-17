import React from 'react';
import {
     Box,
     Typography,
     TextField,
     List,
     ListItem,
     Avatar,
     ListItemText,
     Button,
     Modal,
     Paper,
     Chip,
} from '@mui/material';
import {useAddMember} from '../../hooks/useAddMember';
import useStyles from './styles';

const AddMemberModal = ({open, onClose}: {open: boolean; onClose: () => void}) => {
     const classes = useStyles();
     const {
          searchQuery,
          setSearchQuery,
          filteredUsers,
          selectedMembers,
          handleAddMember,
          handleSelectMember,
          handleRemoveMember,
          isDropdownVisible,
          handleFocus,
     } = useAddMember(onClose);

     return (
          <Modal open={open} onClose={onClose} aria-labelledby="add-member-modal-title">
               <Box className={classes.modalContainer}>
                    <Typography
                         id="add-member-modal-title"
                         variant="h6"
                         className={classes.modalTitle}>
                         Add Member
                    </Typography>
                    <Box position="relative" marginBottom={2}>
                         <TextField
                              label="Search by name or email"
                              fullWidth
                              className={classes.input}
                              value={searchQuery}
                              onChange={e => setSearchQuery(e.target.value)}
                              onFocus={handleFocus}
                              autoComplete="off"
                         />
                         {isDropdownVisible && (
                              <Paper className={classes.dropdown} elevation={3}>
                                   <List>
                                        {filteredUsers.map(user => (
                                             <ListItem
                                                  key={user.id}
                                                  onClick={() =>
                                                       handleSelectMember(user.id, user.name)
                                                  }
                                                  className={classes.listItem}>
                                                  <Avatar
                                                       src={user.avatar}
                                                       alt={user.name}
                                                       className={classes.avatar}
                                                  />
                                                  <ListItemText
                                                       primary={user.name}
                                                       secondary={user.email}
                                                  />
                                             </ListItem>
                                        ))}
                                   </List>
                              </Paper>
                         )}
                    </Box>
                    <Box display="flex" flexWrap="wrap" gap={1} marginBottom={2}>
                         {selectedMembers.map(member => (
                              <Chip
                                   key={member.id}
                                   label={member.name}
                                   onDelete={() => handleRemoveMember(member.id)}
                                   avatar={
                                        <Avatar
                                             sx={{
                                                  bgcolor: `#${Math.floor(
                                                       Math.random() * 16777215,
                                                  ).toString(16)}`,
                                             }}>
                                             {member.name
                                                  .split(' ')
                                                  .map(word => word[0])
                                                  .join('')}
                                        </Avatar>
                                   }
                                   className={classes.chip}
                              />
                         ))}
                    </Box>
                    <Box display="flex" justifyContent="space-between" marginTop={2}>
                         <Button
                              variant="contained"
                              color="primary"
                              disabled={selectedMembers.length === 0}
                              onClick={handleAddMember}
                              className={classes.addButton}>
                              Add
                         </Button>
                         <Button onClick={onClose} className={classes.cancelButton}>
                              Cancel
                         </Button>
                    </Box>
               </Box>
          </Modal>
     );
};

export default AddMemberModal;

import React, {useState, useContext} from 'react';
import {
     Box,
     Button,
     Typography,
     TextField,
     IconButton,
     Avatar,
     Checkbox,
     List,
     ListItem,
     InputAdornment,
     MenuItem,
     CircularProgress,
     Divider,
     Select,
     Chip,
     Modal,
} from '@mui/material';
import {Close, Add, Attachment} from '@mui/icons-material';
import {v4 as uuidv4} from 'uuid';
import {AppContext} from '../../context/AppContext';
import useStyles from './styles';

const AddTaskModal = ({
     open,
     onClose,
     projectId,
}: {
     open: boolean;
     onClose: () => void;
     projectId: string | null;
}) => {
     const classes = useStyles();
     const {state, dispatch} = useContext(AppContext);

     const [title, setTitle] = useState('');
     const [description, setDescription] = useState('');
     const [column, setColumn] = useState('');
     const [subtasks, setSubtasks] = useState<{id: string; name: string; completed: boolean}[]>([]);
     const [newSubtask, setNewSubtask] = useState('');
     const [assignees, setAssignees] = useState<{name: string; avatar: string}[]>([]);
     const [attachments, setAttachments] = useState<File[]>([]);
     const [priority, setPriority] = useState('Normal');
     const [dueDate, setDueDate] = useState('');
     const [loading, setLoading] = useState(false);

     const handleAddSubtask = () => {
          if (newSubtask.trim()) {
               setSubtasks([...subtasks, {id: uuidv4(), name: newSubtask, completed: false}]);
               setNewSubtask('');
          }
     };

     const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          if (e.target.files) {
               setAttachments([...attachments, ...Array.from(e.target.files)]);
          }
     };

     const handleAddAssignee = (assignee: {name: string; avatar: string}) => {
          if (!assignees.find(a => a.name === assignee.name)) {
               setAssignees([...assignees, assignee]);
          }
     };

     const handleSaveTask = async () => {
          if (!title.trim() || !column) return;

          setLoading(true);

          const newTask = {
               id: uuidv4(),
               title,
               description,
               column,
               subtasks,
               assignees,
               attachments: attachments.length,
               priority,
               dueDate,
               createdAt: new Date().toISOString(),
               completed: false,
          };

          setTimeout(() => {
               dispatch({type: 'ADD_TASK', payload: newTask});
               setLoading(false);
               onClose();

               setTitle('');
               setDescription('');
               setColumn('');
               setSubtasks([]);
               setNewSubtask('');
               setAssignees([]);
               setAttachments([]);
               setPriority('Normal');
               setDueDate('');
          }, 1000);
     };

     if (!open) return null;

     const project = state.currentCompany?.projects.find(p => p.id === projectId);
     const availableAssignees = project?.members || state.currentCompany?.teams;
     const availableColumns = project?.columns || [
          {id: 'backlog', title: 'Backlog'},
          {id: 'in_progress', title: 'In Progress'},
          {id: 'review', title: 'Review'},
          {id: 'done', title: 'Done'},
     ];

     return (
          <Modal open={open} onClose={onClose} aria-labelledby="add-task-modal">
               <Box className={classes.modalContainer}>
                    {/* Left Section */}
                    <Box className={classes.leftSection}>
                         <Box className={classes.header}>
                              <Typography variant="h5">Add Task</Typography>
                              <IconButton onClick={onClose}>
                                   <Close />
                              </IconButton>
                         </Box>
                         <TextField
                              label="Task Title"
                              value={title}
                              onChange={e => setTitle(e.target.value)}
                              fullWidth
                              className={classes.taskInput}
                         />
                         <TextField
                              label="Description"
                              value={description}
                              onChange={e => setDescription(e.target.value)}
                              fullWidth
                              multiline
                              rows={3}
                              className={classes.descriptionInput}
                         />
                         <Typography className={classes.sectionTitle}>Subtasks</Typography>
                         <List>
                              {subtasks.map(subtask => (
                                   <ListItem key={subtask.id} className={classes.subtaskItem}>
                                        <Checkbox
                                             checked={subtask.completed}
                                             onChange={() =>
                                                  setSubtasks(
                                                       subtasks.map(st =>
                                                            st.id === subtask.id
                                                                 ? {...st, completed: !st.completed}
                                                                 : st,
                                                       ),
                                                  )
                                             }
                                        />
                                        <Typography>{subtask.name}</Typography>
                                   </ListItem>
                              ))}
                         </List>
                         <TextField
                              placeholder="Add subtask"
                              value={newSubtask}
                              onChange={e => setNewSubtask(e.target.value)}
                              fullWidth
                              className={classes.subtaskInput}
                              InputProps={{
                                   endAdornment: (
                                        <InputAdornment position="end">
                                             <IconButton onClick={handleAddSubtask}>
                                                  <Add />
                                             </IconButton>
                                        </InputAdornment>
                                   ),
                              }}
                         />
                         <Typography className={classes.sectionTitle}>Attachments</Typography>
                         {attachments.map((file, index) => (
                              <Box key={index} className={classes.attachmentItem}>
                                   <Attachment /> {file.name}
                              </Box>
                         ))}
                         <Button
                              variant="outlined"
                              component="label"
                              className={classes.addAttachment}>
                              Add Attachment
                              <input type="file" hidden onChange={handleFileChange} />
                         </Button>
                    </Box>

                    {/* Right Section */}
                    <Box className={classes.rightSection}>
                         <Typography className={classes.sectionTitle}>Select Column</Typography>
                         <TextField
                              select
                              label="Column"
                              value={column}
                              onChange={e => setColumn(e.target.value)}
                              fullWidth>
                              {availableColumns.map(col => (
                                   <MenuItem key={col.id} value={col.id}>
                                        {col.title}
                                   </MenuItem>
                              ))}
                         </TextField>
                         <Typography className={classes.sectionTitle}>Assignees</Typography>
                         <Select
                              fullWidth
                              multiple
                              value={assignees.map(a => a.name)}
                              onChange={e =>
                                   (Array.isArray(e.target.value) ? e.target.value : []).forEach(
                                        (name: string) => {
                                             const user = availableAssignees?.find(
                                                  a => a.name === name,
                                             );
                                             if (user) handleAddAssignee(user);
                                        },
                                   )
                              }
                              sx={{marginBottom: 4}}
                              renderValue={selected => (
                                   <Box sx={{display: 'flex', gap: 0.5}}>
                                        {selected.map(value => (
                                             <Chip key={value} label={value} />
                                        ))}
                                   </Box>
                              )}>
                              {availableAssignees?.map(user => (
                                   <MenuItem key={user.name} value={user.name}>
                                        {user.name}
                                   </MenuItem>
                              ))}
                         </Select>
                         <TextField
                              label="Priority"
                              select
                              value={priority}
                              onChange={e => setPriority(e.target.value)}
                              sx={{marginBottom: 4}}
                              fullWidth>
                              {['Low', 'Normal', 'Urgent'].map(level => (
                                   <MenuItem key={level} value={level}>
                                        {level}
                                   </MenuItem>
                              ))}
                         </TextField>
                         <TextField
                              label="Due Date"
                              type="date"
                              value={dueDate}
                              onChange={e => setDueDate(e.target.value)}
                              fullWidth
                              InputLabelProps={{shrink: true}}
                         />
                         <Divider sx={{marginY: 2}} />
                         <Button
                              variant="contained"
                              fullWidth
                              className={classes.saveButton}
                              onClick={handleSaveTask}
                              disabled={loading}>
                              {loading ? (
                                   <CircularProgress size={24} color="inherit" />
                              ) : (
                                   'Save Task'
                              )}
                         </Button>
                    </Box>
               </Box>
          </Modal>
     );
};

export default AddTaskModal;

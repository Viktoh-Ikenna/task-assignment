import React from 'react';
import {
     Box,
     Table,
     TableBody,
     TableCell,
     TableContainer,
     TableHead,
     TableRow,
     Typography,
     AvatarGroup,
     Avatar,
     LinearProgress,
     IconButton,
} from '@mui/material';
import {AiOutlineEllipsis} from 'react-icons/ai';
import {useContext} from 'react';
import {AppContext} from '../../../../context/AppContext';
import useStyles from './styles';

const SpreadsheetDisplay = ({projectId}: {projectId: string}) => {
     const {state} = useContext(AppContext);
     const classes = useStyles();

     const currentProject = state.currentCompany?.projects.find(
          project => project.id === projectId,
     );

     if (!currentProject) {
          return (
               <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                    <Typography variant="h6">Project not found.</Typography>
               </Box>
          );
     }

     const generateAvatarColor = (index: number) => {
          const colors = ['#FF6F61', '#4CAF50', '#6C63FF', '#FFD700'];
          return colors[index % colors.length];
     };

     return (
          <Box padding={3}>
               {currentProject.columns.map((column, columnIndex) => (
                    <Box key={column.id} marginBottom={4}>
                         <Box
                              className={classes.groupHeader}
                              display="flex"
                              alignItems="center"
                              justifyContent="space-between"
                              padding="8px 16px"
                              borderRadius="8px"
                              bgcolor={column.color}>
                              <Typography fontWeight="bold">{column.title}</Typography>
                              <Typography>{column.taskIds.length} tasks</Typography>
                         </Box>
                         <TableContainer className={classes.tableContainer}>
                              <Table>
                                   <TableHead>
                                        <TableRow>
                                             <TableCell className={classes.tableHeader}>
                                                  Task
                                             </TableCell>
                                             <TableCell className={classes.tableHeader}>
                                                  Description
                                             </TableCell>
                                             <TableCell className={classes.tableHeader}>
                                                  Assignee
                                             </TableCell>
                                             <TableCell className={classes.tableHeader}>
                                                  Due Date
                                             </TableCell>
                                             <TableCell className={classes.tableHeader}>
                                                  Priority
                                             </TableCell>
                                             <TableCell className={classes.tableHeader}>
                                                  Progress
                                             </TableCell>
                                             <TableCell className={classes.tableHeader}>
                                                  Actions
                                             </TableCell>
                                        </TableRow>
                                   </TableHead>
                                   <TableBody>
                                        {column.taskIds.map(taskId => {
                                             const task = currentProject.tasks.find(
                                                  t => t.id === taskId,
                                             );
                                             if (!task) return null;
                                             return (
                                                  <TableRow key={task.id}>
                                                       <TableCell className={classes.mainTask}>
                                                            {task.title}
                                                       </TableCell>
                                                       <TableCell className={classes.tableCell}>
                                                            {task.description || '-'}
                                                       </TableCell>
                                                       <TableCell className={classes.tableCell}>
                                                            <AvatarGroup max={3}>
                                                                 {task.assignees?.map(
                                                                      (assignee, index) => (
                                                                           <Avatar
                                                                                key={index}
                                                                                src={
                                                                                     assignee.avatar
                                                                                }
                                                                                sx={{
                                                                                     bgColor: generateAvatarColor(
                                                                                          index,
                                                                                     ),
                                                                                     backgroundColor:
                                                                                          generateAvatarColor(
                                                                                               index,
                                                                                          ),
                                                                                     fontSize: 12,
                                                                                     fontWeight:
                                                                                          'bold',
                                                                                }}>
                                                                                {assignee.name
                                                                                     .split(' ')
                                                                                     .map(
                                                                                          word =>
                                                                                               word[0],
                                                                                     )
                                                                                     .join('')
                                                                                     .toUpperCase()}
                                                                           </Avatar>
                                                                      ),
                                                                 )}
                                                            </AvatarGroup>
                                                       </TableCell>
                                                       <TableCell className={classes.tableCell}>
                                                            {task.dueDate || 'N/A'}
                                                       </TableCell>
                                                       <TableCell className={classes.tableCell}>
                                                            <Box
                                                                 className={`${
                                                                      classes.priorityBadge
                                                                 } ${
                                                                      task.priority === 'Urgent'
                                                                           ? classes.urgent
                                                                           : task.priority ===
                                                                             'Normal'
                                                                           ? classes.normal
                                                                           : classes.low
                                                                 }`}>
                                                                 {task.priority || 'Normal'}
                                                            </Box>
                                                       </TableCell>
                                                       <TableCell className={classes.tableCell}>
                                                            <LinearProgress
                                                                 variant="determinate"
                                                                 value={task.progress || 0}
                                                                 className={classes.progressBar}
                                                            />
                                                       </TableCell>
                                                       <TableCell className={classes.tableCell}>
                                                            <IconButton>
                                                                 <AiOutlineEllipsis />
                                                            </IconButton>
                                                       </TableCell>
                                                  </TableRow>
                                             );
                                        })}
                                   </TableBody>
                              </Table>
                         </TableContainer>
                    </Box>
               ))}
          </Box>
     );
};

export default SpreadsheetDisplay;

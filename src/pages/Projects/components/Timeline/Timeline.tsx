import React, {useContext} from 'react';
import {Box, Typography, Avatar, Chip, LinearProgress} from '@mui/material';
import {
     Timeline,
     TimelineItem,
     TimelineSeparator,
     TimelineConnector,
     TimelineContent,
     TimelineDot,
} from '@mui/lab';
import {useParams} from 'react-router-dom';
import {AppContext} from '../../../../context/AppContext';
import useStyles from './styles';

const TimelineDisplay = ({projectId}: {projectId: string}) => {
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

     return (
          <Box padding={3} className={classes.timelineContainer}>
               <Timeline position="alternate">
                    {currentProject.columns.map(column =>
                         column.taskIds.map((taskId, index) => {
                              const task = currentProject.tasks.find(t => t.id === taskId);
                              if (!task) return null;

                              return (
                                   <TimelineItem key={task.id}>
                                        <TimelineSeparator>
                                             <TimelineDot
                                                  sx={{
                                                       backgroundColor: column.color,
                                                       border: `3px solid ${column.color}`,
                                                       width: '20px',
                                                       height: '20px',
                                                  }}
                                             />
                                             {index < column.taskIds.length - 1 && (
                                                  <TimelineConnector
                                                       sx={{
                                                            backgroundColor: column.color,
                                                            width: '4px',
                                                            height: '100%',
                                                       }}
                                                  />
                                             )}
                                        </TimelineSeparator>
                                        <TimelineContent>
                                             <Box
                                                  className={classes.timelineCard}
                                                  padding={2}
                                                  borderRadius="12px"
                                                  bgcolor="background.paper"
                                                  boxShadow="0px 6px 16px rgba(0, 0, 0, 0.12)">
                                                  <Typography
                                                       variant="h6"
                                                       className={classes.taskTitle}
                                                       gutterBottom>
                                                       {task.title}
                                                  </Typography>
                                                  <Typography
                                                       variant="body2"
                                                       className={classes.taskDescription}
                                                       gutterBottom>
                                                       {task.description ||
                                                            'No description provided.'}
                                                  </Typography>
                                                  <Box
                                                       display="flex"
                                                       alignItems="center"
                                                       gap={1}
                                                       mb={2}>
                                                       {task.assignees?.map((assignee, index) => (
                                                            <Avatar
                                                                 key={index}
                                                                 src={assignee.avatar}
                                                                 alt={assignee.name}
                                                                 className={classes.avatar}>
                                                                 {assignee.name
                                                                      ?.split(' ')
                                                                      .map(word => word[0])
                                                                      .join('')}
                                                            </Avatar>
                                                       ))}
                                                       {task.assignees &&
                                                            task.assignees.length > 3 && (
                                                                 <Chip
                                                                      label={`+${
                                                                           task.assignees.length - 3
                                                                      }`}
                                                                      size="small"
                                                                      className={
                                                                           classes.assigneeChip
                                                                      }
                                                                 />
                                                            )}
                                                  </Box>
                                                  <Box>
                                                       <LinearProgress
                                                            variant="determinate"
                                                            value={task.progress || 0}
                                                            className={classes.progressBar}
                                                       />
                                                       <Typography
                                                            variant="caption"
                                                            className={classes.progressText}>
                                                            {task.progress || 0}% Complete
                                                       </Typography>
                                                  </Box>
                                             </Box>
                                        </TimelineContent>
                                   </TimelineItem>
                              );
                         }),
                    )}
               </Timeline>
          </Box>
     );
};

export default TimelineDisplay;

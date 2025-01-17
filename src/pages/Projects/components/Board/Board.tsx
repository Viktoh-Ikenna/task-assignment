import React, {useContext} from 'react';
import {Box, Grid, Typography, Button, Paper, Avatar, Chip} from '@mui/material';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import {useParams} from 'react-router-dom';
import useStyles from './styles';
import {AppContext} from '../../../../context/AppContext';
import {FaEye, FaCommentAlt, FaPaperclip} from 'react-icons/fa';
import {FiMoreHorizontal, FiPlus} from 'react-icons/fi';

const BoardPage = ({projectId}: {projectId: string}) => {
     const {state, dispatch, handleToggleAddTaskModal, setSelectedProjectId} =
          useContext(AppContext);
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

     const onDragEnd = (result: any) => {
          const {source, destination, draggableId} = result;

          if (!destination) return;

          if (
               source.droppableId === destination.droppableId &&
               source.index === destination.index
          ) {
               return;
          }

          dispatch({
               type: 'MOVE_TASK',
               payload: {
                    taskId: draggableId,
                    sourceColumnId: source.droppableId,
                    destColumnId: destination.droppableId,
                    index: destination.index,
               },
          });
     };

     const generateAvatarColor = (index: number) => {
          const colors = ['#FF6F61', '#4CAF50', '#6C63FF', '#FFD700'];
          return colors[index % colors.length];
     };

     return (
          <DragDropContext onDragEnd={onDragEnd}>
               <Box className={classes.boardContainer}>
                    <Grid container spacing={2}>
                         {currentProject.columns.map(column => {
                              const tasks = column.taskIds.map(taskId =>
                                   currentProject.tasks.find(task => task.id === taskId),
                              );

                              return (
                                   <Grid item xs={3} key={column.id}>
                                        <Box className={classes.columnHeader}>
                                             <div
                                                  style={{
                                                       display: 'flex',
                                                       alignItems: 'center',
                                                       gap: 8,
                                                  }}>
                                                  <Box
                                                       className={classes.columnIndicator}
                                                       style={{
                                                            backgroundColor: column.color,
                                                       }}
                                                  />

                                                  <Typography
                                                       variant="h6"
                                                       className={classes.columnTitle}>
                                                       {column.title}{' '}
                                                       <span className={classes.taskCount}>
                                                            ({column.taskIds.length})
                                                       </span>
                                                  </Typography>
                                             </div>

                                             <FiMoreHorizontal
                                                  size={20}
                                                  className={classes.optionsIconH}
                                             />
                                        </Box>
                                        <Button
                                             variant="contained"
                                             className={classes.addTaskButton}
                                             onClick={() => {
                                                  handleToggleAddTaskModal();
                                                  setSelectedProjectId(projectId);
                                             }}
                                             startIcon={<FiPlus />}>
                                             Add New Task
                                        </Button>
                                        <Droppable droppableId={column.id}>
                                             {(provided, snapshot) => (
                                                  <Box
                                                       ref={provided.innerRef}
                                                       {...provided.droppableProps}
                                                       className={`${classes.columnBody} ${
                                                            snapshot.isDraggingOver
                                                                 ? classes.draggingOver
                                                                 : ''
                                                       }`}>
                                                       {tasks.map((task, index) =>
                                                            task ? (
                                                                 <Draggable
                                                                      key={task.id}
                                                                      draggableId={task.id}
                                                                      index={index}>
                                                                      {(provided, snapshot) => (
                                                                           <Paper
                                                                                ref={
                                                                                     provided.innerRef
                                                                                }
                                                                                {...provided.draggableProps}
                                                                                {...provided.dragHandleProps}
                                                                                className={`${
                                                                                     classes.taskCard
                                                                                } ${
                                                                                     snapshot.isDragging
                                                                                          ? classes.dragging
                                                                                          : ''
                                                                                }`}>
                                                                                <Box
                                                                                     className={
                                                                                          classes.cardHeader
                                                                                     }>
                                                                                     <Chip
                                                                                          label={
                                                                                               task.tag ||
                                                                                               'Task'
                                                                                          }
                                                                                          size="small"
                                                                                          className={
                                                                                               classes.taskTag
                                                                                          }
                                                                                          style={{
                                                                                               backgroundColor:
                                                                                                    task.tagColor ||
                                                                                                    '#E0E0E0',
                                                                                               color: task.tagColor
                                                                                                    ? '#FFFFFF'
                                                                                                    : '#000000',
                                                                                          }}
                                                                                     />
                                                                                     <FiMoreHorizontal
                                                                                          size={20}
                                                                                          className={
                                                                                               classes.optionsIcon
                                                                                          }
                                                                                     />
                                                                                </Box>
                                                                                <Typography
                                                                                     variant="subtitle1"
                                                                                     className={
                                                                                          classes.taskTitle
                                                                                     }>
                                                                                     {task.title}
                                                                                </Typography>
                                                                                <Typography
                                                                                     variant="body2"
                                                                                     className={
                                                                                          classes.taskDescription
                                                                                     }>
                                                                                     {
                                                                                          task.description
                                                                                     }
                                                                                </Typography>
                                                                                <Box
                                                                                     className={
                                                                                          classes.progressContainer
                                                                                     }>
                                                                                     <Chip
                                                                                          label={`${task.progress}/3`}
                                                                                          size="small"
                                                                                          className={
                                                                                               classes.progressChip
                                                                                          }
                                                                                     />
                                                                                </Box>
                                                                                <Box
                                                                                     className={
                                                                                          classes.taskFooter
                                                                                     }>
                                                                                     <Box
                                                                                          className={
                                                                                               classes.avatarGroup
                                                                                          }>
                                                                                          {task.assignees?.map(
                                                                                               (
                                                                                                    assignee,
                                                                                                    idx,
                                                                                               ) => (
                                                                                                    <Avatar
                                                                                                         key={
                                                                                                              idx
                                                                                                         }
                                                                                                         src={
                                                                                                              assignee.avatar
                                                                                                         }
                                                                                                         sx={{
                                                                                                              bgColor: generateAvatarColor(
                                                                                                                   index,
                                                                                                              ),
                                                                                                              fontSize: 12,
                                                                                                              fontWeight: 600,
                                                                                                         }}>
                                                                                                         {assignee.name
                                                                                                              .split(
                                                                                                                   ' ',
                                                                                                              )
                                                                                                              .map(
                                                                                                                   word =>
                                                                                                                        word[0],
                                                                                                              )
                                                                                                              .join(
                                                                                                                   '',
                                                                                                              )
                                                                                                              .toUpperCase()}
                                                                                                    </Avatar>
                                                                                               ),
                                                                                          )}
                                                                                     </Box>
                                                                                     <Box
                                                                                          className={
                                                                                               classes.taskMeta
                                                                                          }>
                                                                                          <Box
                                                                                               className={
                                                                                                    classes.iconContainer
                                                                                               }>
                                                                                               <FaEye
                                                                                                    size={
                                                                                                         16
                                                                                                    }
                                                                                                    className={
                                                                                                         classes.metaIcon
                                                                                                    }
                                                                                               />
                                                                                               <Typography variant="caption">
                                                                                                    {task.views ||
                                                                                                         3}
                                                                                               </Typography>
                                                                                          </Box>
                                                                                          <Box
                                                                                               className={
                                                                                                    classes.iconContainer
                                                                                               }>
                                                                                               <FaCommentAlt
                                                                                                    size={
                                                                                                         16
                                                                                                    }
                                                                                                    className={
                                                                                                         classes.metaIcon
                                                                                                    }
                                                                                               />
                                                                                               <Typography variant="caption">
                                                                                                    5
                                                                                               </Typography>
                                                                                          </Box>
                                                                                          <Box
                                                                                               className={
                                                                                                    classes.iconContainer
                                                                                               }>
                                                                                               <FaPaperclip
                                                                                                    size={
                                                                                                         16
                                                                                                    }
                                                                                                    className={
                                                                                                         classes.metaIcon
                                                                                                    }
                                                                                               />
                                                                                               <Typography variant="caption">
                                                                                                    {task.attachments ||
                                                                                                         8}
                                                                                               </Typography>
                                                                                          </Box>
                                                                                     </Box>
                                                                                </Box>
                                                                           </Paper>
                                                                      )}
                                                                 </Draggable>
                                                            ) : null,
                                                       )}
                                                       {provided.placeholder}
                                                  </Box>
                                             )}
                                        </Droppable>
                                   </Grid>
                              );
                         })}
                    </Grid>
               </Box>
          </DragDropContext>
     );
};

export default BoardPage;

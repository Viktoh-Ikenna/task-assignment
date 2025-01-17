import React, {useContext} from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {Box, Typography} from '@mui/material';
import {useParams} from 'react-router-dom';
import {AppContext} from '../../../../context/AppContext';
import useStyles from './styles';

const CalendarDisplay = ({projectId}: {projectId: string}) => {
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

     const events = currentProject.tasks.map(task => ({
          id: task.id,
          title: task.title,
          start: task.createdAt,
          end: task.dueDate,
          backgroundColor: task.tagColor || '#6C63FF',
          borderColor: task.tagColor || '#6C63FF',
     }));

     return (
          <Box padding={3} className={classes.calendarContainer}>
               <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                    headerToolbar={{
                         start: 'prev,next today',
                         center: 'title',
                         end: 'dayGridMonth,timeGridWeek,timeGridDay',
                    }}
                    events={events}
                    editable={true}
                    selectable={true}
                    dayMaxEvents={true}
                    eventDisplay="block"
                    height="auto"
                    eventContent={eventInfo => (
                         <Typography
                              variant="body2"
                              className={classes.eventText}
                              style={{color: '#fff'}}>
                              {eventInfo.event.title}
                         </Typography>
                    )}
               />
          </Box>
     );
};

export default CalendarDisplay;

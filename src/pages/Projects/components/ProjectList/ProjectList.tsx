import React, {useContext, useEffect} from 'react';
import {Box, Typography} from '@mui/material';
import {useNavigate, useLocation} from 'react-router-dom';
import ProjectCard from '../ProjectCard/ProjectCard';
import {AppContext} from '../../../../context/AppContext';

const ProjectList = () => {
     const {state} = useContext(AppContext);
     const navigate = useNavigate();
     const location = useLocation();

     const projects = state.currentCompany?.projects || [];

     useEffect(() => {
          if (projects?.length > 0 && !location.pathname.includes('/projects/')) {
               navigate(`/projects/${projects[0].id}`);
          }
     }, [projects, navigate, location.pathname]);

     if (!state.currentCompany) {
          return (
               <Typography variant="body1" color="textSecondary" align="center">
                    No company selected. Please select a company to view its projects.
               </Typography>
          );
     }

     return (
          <Box sx={{width: 300}}>
               {projects.length === 0 ? (
                    <Typography variant="body1" color="textSecondary" align="center">
                         No projects found for {state.currentCompany.name}.
                    </Typography>
               ) : (
                    projects.map(project => {
                         const isActive = location.pathname.includes(`/projects/${project.id}`);
                         return (
                              <ProjectCard
                                   key={project.id}
                                   name={project.name}
                                   isActive={isActive}
                                   onClick={() => navigate(`/projects/${project.id}`)}
                              />
                         );
                    })
               )}
          </Box>
     );
};

export default ProjectList;

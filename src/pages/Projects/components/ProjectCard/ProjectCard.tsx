import React from 'react';
import {Box, Typography, IconButton} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import useStyles from './styles';

interface ProjectCardProps {
     name: string;
     isActive: boolean;
     onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({name, isActive, onClick}) => {
     const classes = useStyles({isActive});

     return (
          <Box className={classes.card} onClick={onClick}>
               <Box className={classes.icon}>
                    <img
                         src="https://img.freepik.com/premium-vector/project-management-marketing-analysis-development-online-successful-strategy-motivation_501813-2156.jpg"
                         alt="Project Icon"
                         width={35}
                         height={35}
                         style={{borderRadius: '50%'}}
                    />
               </Box>
               <Typography className={classes.name}>{name}</Typography>
               <IconButton className={classes.menuButton}>
                    <MoreVertIcon />
               </IconButton>
          </Box>
     );
};

export default ProjectCard;

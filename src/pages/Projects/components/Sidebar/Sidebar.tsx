import React from 'react';
import { Box, Button } from '@mui/material';
import ProjectList from '../ProjectList/ProjectList';
import TeamMembers from '../TeamMembers/TeamMembers';
import TimeSummary from '../TimeSummary/TimeSummary';
import useStyles from './styles';

const Sidebar = () => {
    const classes = useStyles();

    return (
        <Box className={classes.sidebar}>
            <ProjectList />
            <TeamMembers />
            <TimeSummary />
            <Button className={classes.addProjectButton}>
                + Add Project
            </Button>
        </Box>
    );
};

export default Sidebar;
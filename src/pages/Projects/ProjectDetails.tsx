import React, {useState} from 'react';
import {Box, Typography, Tabs, Tab, InputBase, IconButton, Button} from '@mui/material';
import {AiOutlineSearch, AiOutlineFilter} from 'react-icons/ai';
import BoardPage from './components/Board/Board';
import SpreadsheetDisplay from './components/Spreadsheet/Spreadsheet';
import TimelineDisplay from './components/Timeline/Timeline';
import CalendarDisplay from './components/Calender/Calender';
import {useParams} from 'react-router-dom';
import Header from './components/Header/Header';

const ProjectDetails = () => {
     const [activeTab, setActiveTab] = useState(0);
     const {projectId} = useParams();

     const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
          setActiveTab(newValue);
     };

     if (!projectId) {
          return <>Not Found</>;
     }

     const tabData = [
          {
               label: 'Board',
               content: <BoardPage projectId={projectId} />,
               color: '#6C63FF',
               minWidth: 80,
          },
          {
               label: 'Spreadsheet',
               content: <SpreadsheetDisplay projectId={projectId} />,
               color: '#6C63FF',
               minWidth: 120,
          },
          {
               label: 'Timeline',
               content: <TimelineDisplay projectId={projectId} />,
               color: '#6C63FF',
               minWidth: 100,
          },
          {
               label: 'Calendar',
               content: <CalendarDisplay projectId={projectId} />,
               color: '#6C63FF',
               minWidth: 100,
          },
     ];

     return (
          <Box flexGrow={1}>
               <Header projectId={projectId} />
               <>
                    <Box padding={2} borderBottom="1px solid #E0E0E0 !important">
                         <Box display="flex" alignItems="center" justifyContent="space-between">
                              <Tabs
                                   value={activeTab}
                                   onChange={handleTabChange}
                                   TabIndicatorProps={{
                                        style: {
                                             border: 'none !important',
                                             height: '3px',
                                             borderRadius: '2px',
                                             outline: 0,
                                             background: '#fff !important',
                                             color: '#fff',
                                        },
                                   }}
                                   classes={{indicator: '.indicator'}}
                                   indicatorColor="secondary"
                                   sx={{
                                        backgroundColor: '#f8f8f8',

                                        borderRadius: 4,
                                        display: 'flex',
                                        gap: 2,
                                   }}>
                                   {tabData.map((tab, index) => (
                                        <Tab
                                             key={index}
                                             label={
                                                  <Typography
                                                       variant="body1"
                                                       fontSize={14}
                                                       sx={{
                                                            fontWeight:
                                                                 activeTab === index
                                                                      ? 'bold'
                                                                      : 'normal',
                                                            color:
                                                                 activeTab === index
                                                                      ? '#6C63FF'
                                                                      : '#555',
                                                       }}>
                                                       {tab.label}
                                                  </Typography>
                                             }
                                             sx={{
                                                  minWidth: tab.minWidth,
                                                  border: 'none !important',
                                                  backgroundColor:
                                                       activeTab === index
                                                            ? '#ffffff !important'
                                                            : '#f8f8f8',
                                                  borderRadius: 4,
                                                  height: 20,
                                                  outline: 0,
                                                  marginRight: 1,
                                                  boxShadow:
                                                       activeTab === index
                                                            ? '0px 4px 6px rgba(0, 0, 0, 0.1)'
                                                            : 'none',
                                                  transition:
                                                       'box-shadow 0.3s ease, background-color 0.3s ease',
                                                  '&:hover': {
                                                       backgroundColor: '#fffffe',
                                                  },
                                             }}
                                        />
                                   ))}
                              </Tabs>
                              <Box display="flex" alignItems="center" gap={2}>
                                   <Box
                                        display="flex"
                                        alignItems="center"
                                        sx={{
                                             backgroundColor: '#F9FAFB !important',
                                             border: '1px solid #E0E0E0 !important',
                                             borderRadius: '8px',
                                             padding: '4px 8px',
                                        }}>
                                        <InputBase
                                             placeholder="Search tasks..."
                                             sx={{flexGrow: 1, fontSize: '14px', color: '#555'}}
                                        />
                                        <IconButton size="small">
                                             <AiOutlineSearch size={18} />
                                        </IconButton>
                                   </Box>
                                   <Button
                                        startIcon={<AiOutlineFilter />}
                                        sx={{
                                             backgroundColor: '#F9FAFB !important',
                                             border: '1px solid #E0E0E0 !important',
                                             borderRadius: '8px',
                                             textTransform: 'none',
                                             fontWeight: 'bold',
                                             color: '#555',
                                             padding: '4px 16px',
                                             '&:hover': {
                                                  backgroundColor: '#E0E0E0 !important',
                                             },
                                        }}>
                                        Filter
                                   </Button>
                              </Box>
                         </Box>
                    </Box>
                    <Box padding={3}>{tabData[activeTab]?.content}</Box>
               </>
          </Box>
     );
};

export default ProjectDetails;

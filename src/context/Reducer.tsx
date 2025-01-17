import {AppAction, AppState, Project} from '../types';

export const appReducer = (state: AppState, action: AppAction): AppState => {
     switch (action.type) {
          case 'LOGIN_USER': {
               return {
                    ...state,
                    currentUser: action.payload,
               };
          }
          case 'SET_CURRENT_USER': {
               return {
                    ...state,
                    currentUser: action.payload,
               };
          }
          case 'LOGOUT_USER': {
               return {
                    ...state,
                    currentUser: null,
                    currentCompany: null,
               };
          }
          case 'ADD_TASK': {
               if (!state.currentCompany) return state;

               const {column: columnId, ...taskData} = action.payload;

               const updatedProjects = state.currentCompany.projects.map(project => {
                    const columnExists = project.columns.some(col => col.id === columnId);

                    if (columnExists) {
                         return {
                              ...project,
                              columns: project.columns.map(col =>
                                   col.id === columnId
                                        ? {
                                               ...col,
                                               taskIds: [...col.taskIds, taskData.id],
                                          }
                                        : col,
                              ),
                              tasks: [...project.tasks, taskData],
                         };
                    }

                    return project;
               });

               return {
                    ...state,
                    currentCompany: {
                         ...state.currentCompany,
                         projects: updatedProjects as Project[],
                    },
               };
          }
          case 'EDIT_TASK': {
               if (!state.currentCompany) return state;
               const updatedProjects = state.currentCompany.projects.map(project => ({
                    ...project,
                    tasks: project.tasks.map(task =>
                         task.id === action.payload.id ? action.payload : task,
                    ),
               }));

               return {
                    ...state,
                    currentCompany: {
                         ...state.currentCompany,
                         projects: updatedProjects,
                    },
               };
          }
          case 'DELETE_TASK': {
               if (!state.currentCompany) return state;
               const updatedProjects = state.currentCompany.projects.map(project => ({
                    ...project,
                    tasks: project.tasks.filter(task => task.id !== action.payload),
                    columns: project.columns.map(col => ({
                         ...col,
                         taskIds: col.taskIds.filter(taskId => taskId !== action.payload),
                    })),
               }));

               return {
                    ...state,
                    currentCompany: {
                         ...state.currentCompany,
                         projects: updatedProjects,
                    },
               };
          }
          case 'TOGGLE_COMPLETE': {
               if (!state.currentCompany) return state;
               const updatedProjects = state.currentCompany.projects.map(project => ({
                    ...project,
                    tasks: project.tasks.map(task =>
                         task.id === action.payload ? {...task, completed: !task.completed} : task,
                    ),
               }));

               return {
                    ...state,
                    currentCompany: {
                         ...state.currentCompany,
                         projects: updatedProjects,
                    },
               };
          }
          case 'MOVE_TASK': {
               if (!state.currentCompany) return state;
               const {taskId, sourceColumnId, destColumnId, index} = action.payload;

               const updatedProjects = state.currentCompany.projects.map(project => {
                    const sourceColumn = project.columns.find(col => col.id === sourceColumnId);
                    const destColumn = project.columns.find(col => col.id === destColumnId);

                    if (!sourceColumn || !destColumn) return project;

                    const updatedSourceTaskIds = sourceColumn.taskIds.filter(id => id !== taskId);
                    const updatedDestTaskIds = [...destColumn.taskIds];
                    updatedDestTaskIds.splice(index, 0, taskId);

                    if (sourceColumn === destColumn) return project;

                    return {
                         ...project,
                         columns: project.columns.map(col => {
                              if (col.id === sourceColumnId) {
                                   return {...col, taskIds: updatedSourceTaskIds};
                              }
                              if (col.id === destColumnId) {
                                   return {...col, taskIds: updatedDestTaskIds};
                              }
                              return col;
                         }),
                         tasks: project.tasks.map(task =>
                              task.id === taskId ? {...task, column: destColumnId} : task,
                         ),
                    };
               });

               return {
                    ...state,
                    currentCompany: {
                         ...state.currentCompany,
                         projects: updatedProjects,
                    },
               };
          }
          case 'TOGGLE_THEME': {
               return {...state, theme: state.theme === 'light' ? 'dark' : 'light'};
          }
          case 'ADD_MEMBERS_TO_PROJECT': {
               if (!state.currentCompany) return state;
               const updatedProjects = state.currentCompany.projects.map(project => ({
                    ...project,
                    members: [
                         ...project.members,
                         ...action.payload.filter(
                              member => !project.members.some(m => m.id === member.id),
                         ),
                    ],
               }));

               return {
                    ...state,
                    currentCompany: {
                         ...state.currentCompany,
                         projects: updatedProjects,
                    },
               };
          }
          case 'REMOVE_MEMBER_FROM_PROJECT': {
               if (!state.currentCompany) return state;
               const updatedProjects = state.currentCompany.projects.map(project => ({
                    ...project,
                    members: project.members.filter(member => member.id !== action.payload),
               }));

               return {
                    ...state,
                    currentCompany: {
                         ...state.currentCompany,
                         projects: updatedProjects,
                    },
               };
          }
          case 'UPDATE_MEMBER_DETAILS': {
               if (!state.currentCompany) return state;
               const updatedProjects = state.currentCompany.projects.map(project => ({
                    ...project,
                    members: project.members.map(member =>
                         member.id === action.payload.id ? action.payload : member,
                    ),
               }));

               return {
                    ...state,
                    currentCompany: {
                         ...state.currentCompany,
                         projects: updatedProjects,
                    },
               };
          }
          case 'SET_COMPANY_DETAILS': {
               return {
                    ...state,
                    currentCompany: action.payload,
               };
          }
          case 'ADD_PROJECT': {
               if (!state.currentCompany) return state;
               return {
                    ...state,
                    currentCompany: {
                         ...state.currentCompany,
                         projects: [...state.currentCompany.projects, action.payload],
                    },
               };
          }
          case 'EDIT_PROJECT': {
               if (!state.currentCompany) return state;
               return {
                    ...state,
                    currentCompany: {
                         ...state.currentCompany,
                         projects: state.currentCompany.projects.map(project =>
                              project.id === action.payload.id ? action.payload : project,
                         ),
                    },
               };
          }
          case 'DELETE_PROJECT': {
               if (!state.currentCompany) return state;
               return {
                    ...state,
                    currentCompany: {
                         ...state.currentCompany,
                         projects: state.currentCompany.projects.filter(
                              project => project.id !== action.payload,
                         ),
                    },
               };
          }
          case 'ADD_COLUMN': {
               if (!state.currentCompany) return state;
               const updatedProjects = state.currentCompany.projects.map(project => {
                    if (project.id === action.payload.projectId) {
                         return {
                              ...project,
                              columns: [...project.columns, action.payload.column],
                         };
                    }
                    return project;
               });

               return {
                    ...state,
                    currentCompany: {
                         ...state.currentCompany,
                         projects: updatedProjects,
                    },
               };
          }
          case 'EDIT_COLUMN': {
               if (!state.currentCompany) return state;
               const updatedProjects = state.currentCompany.projects.map(project => {
                    if (project.id === action.payload.projectId) {
                         return {
                              ...project,
                              columns: project.columns.map(column =>
                                   column.id === action.payload.column.id
                                        ? action.payload.column
                                        : column,
                              ),
                         };
                    }
                    return project;
               });

               return {
                    ...state,
                    currentCompany: {
                         ...state.currentCompany,
                         projects: updatedProjects,
                    },
               };
          }
          case 'DELETE_COLUMN': {
               if (!state.currentCompany) return state;
               const updatedProjects = state.currentCompany.projects.map(project => {
                    if (project.id === action.payload.projectId) {
                         return {
                              ...project,
                              columns: project.columns.filter(
                                   column => column.id !== action.payload.columnId,
                              ),
                         };
                    }
                    return project;
               });

               return {
                    ...state,
                    currentCompany: {
                         ...state.currentCompany,
                         projects: updatedProjects,
                    },
               };
          }
          default:
               return state;
     }
};

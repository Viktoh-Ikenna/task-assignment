import {RouteObject} from 'react-router-dom';
import Projects from './index';
import ProjectDetails from './ProjectDetails';

const projectRoutes: RouteObject[] = [
     {
          path: '/projects',
          element: <Projects />,
          children: [{path: ':projectId', element: <ProjectDetails />}],
     },
];

export default projectRoutes;

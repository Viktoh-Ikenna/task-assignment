import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import AppContainer from './components/AppContainer/AppContainer';
import Error from './pages/Error/Error';
import Home from './pages/Home/Home';
import Settings from './pages/Settings/Settings';
import projectRoutes from './pages/Projects/routes';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import CompanySelection from './pages/CompanySelection/CompanySelection';

export const router = createBrowserRouter([
     {
          path: '/',
          element: <AppContainer />,
          errorElement: <Error />,
          children: [
               {path: '/', element: <Home />},
               ...projectRoutes,
               {path: '/settings', element: <Settings />},
          ],
     },
     {path: '/select-company', element: <CompanySelection />},
     {path: '/signin', element: <SignIn />},
     {path: '/signup', element: <SignUp />},
]);

import {useContext, useEffect, useState} from 'react';
import {AppContext} from '../context/AppContext';
import axios from 'axios';

export const useAuth = () => {
     const {state, dispatch} = useContext(AppContext);
     const [loading, setLoading] = useState(true);
     const [isAuthenticated, setIsAuthenticated] = useState(false);

     const logout = () => {
          dispatch({type: 'LOGOUT_USER'});
          localStorage.removeItem('currentUser');
          setIsAuthenticated(false);
          setLoading(false);
     };

     const verifyAndFetchUser = async () => {
          const storedUser = localStorage.getItem('currentUser');
          setLoading(true);
          if (storedUser) {
               const parsedUser = JSON.parse(storedUser);
               try {
                    const {data: appState} = await axios.get('/app_state.json');
                    const user = appState.users.find((u: any) => u.id === parsedUser.id);

                    if (user) {
                         dispatch({type: 'SET_CURRENT_USER', payload: user});
                         setIsAuthenticated(true);
                    } else {
                         logout();
                    }
               } catch (err) {
                    console.error('Error querying app_state.json:', err);
                    logout();
               }
          } else {
               setIsAuthenticated(false);
          }
          setLoading(false);
     };

     useEffect(() => {
          if (!state.currentUser) {
               verifyAndFetchUser();
          } else {
               setLoading(false);
               setIsAuthenticated(true);
          }
     }, [state.currentUser]);

     return {
          isAuthenticated,
          currentUser: state.currentUser,
          logout,
          loading,
     };
};

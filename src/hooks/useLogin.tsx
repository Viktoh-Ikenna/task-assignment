import {useState, useContext} from 'react';
import axios from 'axios';
import {AppContext} from '../context/AppContext';
import {User} from '../types';

export const useLogin = () => {
     const {dispatch} = useContext(AppContext);
     const [loading, setLoading] = useState(false);
     const [error, setError] = useState<string | null>(null);

     const login = async (email: string, password: string): Promise<boolean> => {
          setLoading(true);
          setError(null);

          try {
               const {data: appState} = await axios.get('/app_state.json');
               const user = appState.users.find((u: User) => u.email === email);

               if (!user) {
                    setError('User not found');
                    return false;
               }

               if (user.password !== password) {
                    setError('Invalid password');
                    return false;
               }

               dispatch({type: 'LOGIN_USER', payload: user});
               localStorage.setItem('currentUser', JSON.stringify(user));

               return true;
          } catch (err) {
               setError('An error occurred during login');
               console.error(err);
               return false;
          } finally {
               setLoading(false);
          }
     };

     const logout = () => {
          dispatch({type: 'LOGOUT_USER'});
          localStorage.removeItem('currentUser');
     };

     return {login, logout, loading, error};
};

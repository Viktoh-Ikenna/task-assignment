import React, {useState} from 'react';
import {
     Box,
     TextField,
     Button,
     Typography,
     InputAdornment,
     IconButton,
     CircularProgress,
     Checkbox,
     FormControlLabel,
} from '@mui/material';
import {Visibility, VisibilityOff} from '@mui/icons-material';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useLogin} from '../../hooks/useLogin';
import {useNavigate} from 'react-router-dom';
import useStyles from './styles';

const SignIn = () => {
     const classes = useStyles();
     const [showPassword, setShowPassword] = useState(false);
     const {login, loading, error} = useLogin();
     const navigate = useNavigate();

     const validationSchema = Yup.object({
          email: Yup.string().email('Enter a valid email').required('Email is required'),
          password: Yup.string()
               .min(8, 'Password must be at least 8 characters')
               .required('Password is required'),
     });

     const formik = useFormik({
          initialValues: {
               email: '',
               password: '',
          },
          validationSchema,
          onSubmit: async values => {
               const success = await login(values.email, values.password);
               if (success) {
                    navigate('/projects');
               }
          },
     });

     return (
          <Box className={classes.container}>
               <Box className={classes.formContainer}>
                    <Typography variant="h4" className={classes.title}>
                         Welcome back!
                    </Typography>
                    <Typography variant="body1" className={classes.subtitle}>
                         Enter to get unlimited access to data & information.
                    </Typography>
                    <Box component="form" onSubmit={formik.handleSubmit} className={classes.form}>
                         <TextField
                              label="Email"
                              name="email"
                              type="email"
                              value={formik.values.email}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              fullWidth
                              margin="normal"
                              error={formik.touched.email && Boolean(formik.errors.email)}
                              helperText={formik.touched.email && formik.errors.email}
                              required
                         />
                         <TextField
                              label="Password"
                              name="password"
                              type={showPassword ? 'text' : 'password'}
                              value={formik.values.password}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              fullWidth
                              margin="normal"
                              error={formik.touched.password && Boolean(formik.errors.password)}
                              helperText={formik.touched.password && formik.errors.password}
                              required
                              InputProps={{
                                   endAdornment: (
                                        <InputAdornment position="end">
                                             <IconButton
                                                  onClick={() => setShowPassword(!showPassword)}>
                                                  {showPassword ? (
                                                       <VisibilityOff />
                                                  ) : (
                                                       <Visibility />
                                                  )}
                                             </IconButton>
                                        </InputAdornment>
                                   ),
                              }}
                         />
                         <Box className={classes.options}>
                              <FormControlLabel
                                   control={<Checkbox color="primary" />}
                                   label="Remember me"
                              />
                              <Typography variant="body2" className={classes.forgotPassword}>
                                   Forgot your password?
                              </Typography>
                         </Box>
                         {error && (
                              <Typography color="error" variant="body2" marginBottom={2}>
                                   {error}
                              </Typography>
                         )}
                         <Button
                              type="submit"
                              variant="contained"
                              color="primary"
                              fullWidth
                              disabled={loading}
                              className={classes.submitButton}>
                              {loading ? <CircularProgress size={24} color="inherit" /> : 'Log In'}
                         </Button>
                         <Typography variant="body2" className={classes.or} sx={{marginTop: 1}}>
                              Or,
                         </Typography>

                         <Typography variant="body2" className={classes.register}>
                              Don’t have an account?{' '}
                              <span
                                   onClick={() => navigate('/register')}
                                   className={classes.registerLink}>
                                   Register here
                              </span>
                         </Typography>
                    </Box>
               </Box>
               <Box className={classes.imageContainer}>
                    {/* Add background image or SVG as per your design */}
               </Box>
          </Box>
     );
};

export default SignIn;

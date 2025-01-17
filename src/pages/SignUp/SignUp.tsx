import React from 'react';
import {Box, TextField, Button, Typography, InputAdornment, IconButton} from '@mui/material';
import {Visibility, VisibilityOff} from '@mui/icons-material';
import {useFormik} from 'formik';
import * as Yup from 'yup';

const SignUp = () => {
     const [showPassword, setShowPassword] = React.useState(false);

     const validationSchema = Yup.object({
          name: Yup.string()
               .min(3, 'Name should be at least 3 characters')
               .required('Name is required'),
          email: Yup.string().email('Enter a valid email').required('Email is required'),
          password: Yup.string()
               .min(8, 'Password must be at least 8 characters')
               .required('Password is required'),
          confirmPassword: Yup.string()
               .oneOf([Yup.ref('password'), null as any], 'Passwords must match')
               .required('Confirm your password'),
     });

     const formik = useFormik({
          initialValues: {
               name: '',
               email: '',
               password: '',
               confirmPassword: '',
          },
          validationSchema,
          onSubmit: (values: any) => {},
     });

     return (
          <Box
               display="flex"
               flexDirection="column"
               alignItems="center"
               justifyContent="center"
               minHeight="100vh"
               padding={2}>
               <Typography variant="h4" marginBottom={3}>
                    Sign Up
               </Typography>
               <Box
                    component="form"
                    onSubmit={formik.handleSubmit}
                    maxWidth={400}
                    width="100%"
                    padding={3}
                    boxShadow={3}
                    borderRadius={2}
                    bgcolor="background.paper">
                    <TextField
                         label="Name"
                         name="name"
                         value={formik.values.name}
                         onChange={formik.handleChange}
                         onBlur={formik.handleBlur}
                         fullWidth
                         margin="normal"
                         error={formik.touched.name && Boolean(formik.errors.name)}
                         helperText={
                              formik.touched.name && formik.errors.name
                                   ? String(formik.errors.name)
                                   : ''
                         }
                         required
                    />
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
                         helperText={
                              formik.touched.email && formik.errors.email
                                   ? String(formik.errors.email)
                                   : ''
                         }
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
                         helperText={
                              formik.touched.password && formik.errors.password
                                   ? String(formik.errors.password)
                                   : ''
                         }
                         required
                         InputProps={{
                              endAdornment: (
                                   <InputAdornment position="end">
                                        <IconButton onClick={() => setShowPassword(!showPassword)}>
                                             {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                   </InputAdornment>
                              ),
                         }}
                    />
                    <TextField
                         label="Confirm Password"
                         name="confirmPassword"
                         type={showPassword ? 'text' : 'password'}
                         value={formik.values.confirmPassword}
                         onChange={formik.handleChange}
                         onBlur={formik.handleBlur}
                         fullWidth
                         margin="normal"
                         error={
                              formik.touched.confirmPassword &&
                              Boolean(formik.errors.confirmPassword)
                         }
                         helperText={
                              formik.touched.confirmPassword && formik.errors.confirmPassword
                                   ? String(formik.errors.confirmPassword)
                                   : ''
                         }
                         required
                    />
                    <Button
                         type="submit"
                         variant="contained"
                         color="primary"
                         fullWidth
                         sx={{marginTop: 2}}>
                         Sign Up
                    </Button>
               </Box>
          </Box>
     );
};

export default SignUp;

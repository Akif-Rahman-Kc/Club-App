import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {

  const navigate = useNavigate()

  const [ email, setEmail ] = React.useState(false)
  const [ emailError, setEmailError ] = React.useState('')
  const [ password, setPassword ] = React.useState(false)
  const [ passwordError, setPasswordError ] = React.useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    const adminData = {
      email:'bigshots2001@gmail.com',
      password:'big1002shorts'
    }
    console.log(adminData,"====");
    let data = new FormData(event.currentTarget);
    data = {
      email: data.get('email'),
      password: data.get('password'),
    }
    if (data.email && data.password) {
      if (data.email === adminData.email) {
        setEmail(false)
        setEmailError('')
        if (data.password === adminData.password) {
          setPassword(false)
          setPasswordError('')
          localStorage.setItem('logged', true)
          navigate('/admin')
        } else {
          setPassword(true)
          setPasswordError('Password is incorrect')
        }
      } else {
        setEmail(true)
        setEmailError('Email is incorrect')
      }
    } else {
      if (data.email === '') {
        setEmail(true)
        setEmailError('Enter the email')
      }else{
        setEmail(false)
        setEmailError('')
      }
      if (data.password === '') {
        setPassword(true)
        setPasswordError('Enter the password')
      }else{
        setPassword(false)
        setPasswordError('')
      }
    }
  };

  return (
    <Box sx={{ m: 0 , pt: 2 , height:'100vh' , backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXUI5rwTQXnMRknLhySV-D_EgIUKt-ZDvQJTt8u9DLeMHn39OfhkKXR_hS3WZ9I0kjyB4&usqp=CAU")' , color:'#fff' }}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 13,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography fontFamily={'fantasy'} fontSize={'28px'} component="h1" variant="h5">
            LOG IN
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              error={email}
              helperText={emailError}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              error={password}
              helperText={passwordError}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
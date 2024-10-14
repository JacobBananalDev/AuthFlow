// src/components/Login.jsx
import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Box,
  Divider,
  IconButton,
} from '@mui/material';
import { Google as GoogleIcon, Apple as AppleIcon, PublicRounded } from '@mui/icons-material';
import { color, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PurpleMountains from '../assets/PurpleMountains.jpg'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement login logic here
  };

  return (
    <Box className="login-page">
      {/* Left Card (Image + Caption) */}
      <motion.div
        className="card left-card"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={PurpleMountains}
          alt="Landscape"
          className="card-image"
        />
      </motion.div>

      {/* Right Card (Login Form) */}
      <motion.div
        className="card right-card"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h4" gutterBottom className='login-typography'>
          Log In
        </Typography>
        <Typography variant="body2">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </Typography>

        <form onSubmit={handleLogin} className="login-form">
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            variant="outlined"
            type="email"
            required
            margin="normal"
            sx={{
              input: { color: 'white' },
              label: { color: 'white' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: 'white' },
                '&:hover fieldset': { borderColor: '#a0a0b0' },
                '&.Mui-focused fieldset': { borderColor: 'white' },
              },
            }}
          />
          <TextField
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            variant="outlined"
            type="password"
            required
            margin="normal"
            sx={{
              input: { color: 'white' },
              label: { color: 'white' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: 'white' },
                '&:hover fieldset': { borderColor: '#a0a0b0' },
                '&.Mui-focused fieldset': { borderColor: 'white' },
              },
            }}
          />
          <Button type="submit" variant="contained" fullWidth>
            Log In
          </Button>
        </form>

        <Divider sx={{ marginY: 2 }}>Or log in with</Divider>

        <Box display="flex" gap={2}>
          <Button
            variant="outlined"
            fullWidth
            startIcon={<GoogleIcon />}
            onClick={() => console.log('Google Login')}
          >
            Google
          </Button>
          <Button
            variant="outlined"
            fullWidth
            startIcon={<AppleIcon />}
            onClick={() => console.log('Apple Login')}
          >
            Apple
          </Button>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Login;

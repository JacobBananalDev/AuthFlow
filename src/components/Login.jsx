// src/components/Login.jsx
import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { signInWithGoogle } from '../firebase';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Login logic here
  };

  return (
    <motion.div
      className="login-container"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Typography variant="h4">Log In</Typography>
      <form onSubmit={handleLogin} className="login-form">
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          type="email"
        />
        <TextField
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          type="password"
        />
        <Button type="submit" variant="contained" fullWidth>
          Log In
        </Button>
      </form>
      <Typography>Or log in with:</Typography>
      <Button onClick={signInWithGoogle} variant="outlined" fullWidth>
        Sign in with Google
      </Button>
      <Typography>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </Typography>
    </motion.div>
  );
};

export default Login;

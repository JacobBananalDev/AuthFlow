// src/components/SignUp.jsx
import React, { useState } from 'react';
import { TextField, Button, Checkbox, FormControlLabel, Typography } from '@mui/material';
import { signInWithGoogle } from '../firebase';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', password: '' });

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // Sign-up logic here
  };

  return (
    <motion.div
      className="signup-container"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Typography variant="h4">Create an account</Typography>
      <form onSubmit={handleSignUp} className="signup-form">
        <TextField
          label="First Name"
          name="firstName"
          value={form.firstName}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
          label="Last Name"
          name="lastName"
          value={form.lastName}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
          label="Email"
          name="email"
          value={form.email}
          onChange={handleInputChange}
          fullWidth
          type="email"
        />
        <TextField
          label="Password"
          name="password"
          value={form.password}
          onChange={handleInputChange}
          fullWidth
          type="password"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="I agree to the Terms & Conditions"
        />
        <Button type="submit" variant="contained" fullWidth>
          Create account
        </Button>
      </form>
      <Typography>Or sign up with:</Typography>
      <Button onClick={signInWithGoogle} variant="outlined" fullWidth>
        Sign in with Google
      </Button>
      <Typography>
        Already have an account? <Link to="/login">Log in</Link>
      </Typography>
    </motion.div>
  );
};

export default SignUp;

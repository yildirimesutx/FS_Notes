import React from 'react';
import { LockOutlined } from '@mui/icons-material';
import CopyRight from '../components/CopyRight';
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import { blue } from '@mui/material/colors';

function Register() {
  return (
    <Container
      sx={{
        marginTop: '3rem',
        // mt: 6,
        height: 'calc(100vh - 3rem)',
        textAlign: 'center',
      }}
      maxWidth="sm"
    >
      <Avatar
        sx={{
          margin: '1rem auto',
          bgcolor: 'primary.main',
          // bgcolor: blue[500],
        }}
      >
        <LockOutlined />
      </Avatar>
      <Typography sx={{ margin: '1rem' }} variant="h4">
        Sign Up
      </Typography>
      <form>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField name="username" label="User Name" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField name="email" label="Email" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField name="password" label="Password" />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="password2"
              label="Password Again"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
      <p>
        Already have an account?
        <Link
          sx={{
            textDecoration: 'none',
            fontWeight: '600',
            paddingLeft: '0.5rem',
          }}
          href="/login"
        >
          Login.
        </Link>
      </p>
      <Box mt={5}>
        <CopyRight />
      </Box>
    </Container>
  );
}

export default Register;

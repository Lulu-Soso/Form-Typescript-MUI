import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Grid,
} from '@mui/material';
import handIMG from './assets/images/hand.jpg';

const App: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);
  console.log('errors', errors);

  return (
    <Container
      maxWidth="lg"
      sx={{
        background: '#f4f4f4',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
      }}
    >
      {/* <Grid container spacing={2}> */}
      <Grid container>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: '2rem' }}>
            <Typography variant="h4" align="center" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body1" align="center">
              We're open for any suggestion or just to have a chat.
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                fullWidth
                label="Name *"
                variant="standard"
                InputProps={{
                  sx: {
                    borderBottom: '1px solid #ccc',
                  },
                  ...register('name', {
                    required: true,
                    maxLength: 80,
                  }),
                }}
              />
              {errors.name && (
                <Typography
                  variant="body2"
                  sx={{
                    color: 'rgb(255, 71, 71)',
                    fontSize: '10px',
                  }}
                >
                  {errors.name.type === 'required' && 'This field is required.'}
                  {errors.name.type === 'maxLength' &&
                    'Max length of name is 80 characters.'}
                </Typography>
              )}
              <TextField
                fullWidth
                label="Email *"
                variant="standard"
                InputProps={{
                  sx: {
                    borderBottom: '1px solid #ccc',
                  },
                  ...register('email', {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  }),
                }}
              />
              {errors.email && (
                <Typography
                  variant="body2"
                  sx={{
                    color: 'rgb(255, 71, 71)',
                    fontSize: '10px',
                  }}
                >
                  {errors.email.type === 'required' &&
                    'This field is required.'}
                  {errors.email.type === 'pattern' &&
                    'Invalid Email Address.'}
                </Typography>
              )}
              <TextField
                fullWidth
                label="Phone"
                variant="standard"
                InputProps={{
                  sx: {
                    borderBottom: '1px solid #ccc',
                  },
                  ...register('phoneNumber', {
                    pattern:
                      /^(?:(?:(?:\+|00)33[\s.-]?)|0)[1-9](?:(?:[\s.-]?[0-9]{2}){4})$/,
                  }),
                }}
              />
              {errors.phoneNumber && (
                <Typography
                  variant="body2"
                  sx={{
                    color: 'rgb(255, 71, 71)',
                    fontSize: '10px',
                  }}
                >
                  Invalid Phone Number
                </Typography>
              )}
              <TextField
                fullWidth
                label="Message *"
                variant="standard"
                multiline
                rows={4}
                InputProps={{
                  sx: {
                    borderBottom: '1px solid #ccc',
                  },
                  ...register('message', {
                    required: true,
                  }),
                }}
              />
              {errors.message && (
                <Typography
                  variant="body2"
                  sx={{
                    color: 'rgb(255, 71, 71)',
                    fontSize: '10px',
                  }}
                >
                  This field is required.
                </Typography>
              )}
              <Button
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                onClick={handleSubmit(onSubmit)}
                sx={{ marginTop: '1rem' }}
              >
                Send Message
              </Button>
            </form>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src={handIMG}
            alt="hand"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;

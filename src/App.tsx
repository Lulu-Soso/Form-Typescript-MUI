import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Grid,
  Snackbar
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import handIMG from "./assets/images/hand.jpg";

const YOUR_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const onSubmit = (data: any) => {
    const formData = {
      name: data.name,
      email: data.email,
      phoneNumber: data.phoneNumber,
      message: data.message,
    };

    // console.log('Données du formulaire :', formData);

    emailjs
      .send("service_39551s2", "template_dr8fprn", formData, YOUR_PUBLIC_KEY)
      .then(
        (result) => {
          setSnackbarOpen(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        background: "#f4f4f4",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <Grid container>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: "2rem" }}>
            <Typography variant="h4" align="center" gutterBottom>
              Me contacter
            </Typography>
            <Typography variant="body1" align="center">
              We're open for any suggestion or just to have a chat.
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                fullWidth
                label="Nom *"
                variant="standard"
                InputProps={{
                  sx: {
                    borderBottom: "1px solid #ccc",
                  },
                  ...register("name", {
                    required: true,
                    maxLength: 80,
                  }),
                }}
              />
              {errors.name && (
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgb(255, 71, 71)",
                    fontSize: "10px",
                  }}
                >
                  {errors.name.type === "required" && "Ce champ est obligatoire."}
                  {errors.name.type === "maxLength" &&
                    "La longueur maximale est de 80 caractères."}
                </Typography>
              )}
              <TextField
                fullWidth
                label="Email *"
                variant="standard"
                InputProps={{
                  sx: {
                    borderBottom: "1px solid #ccc",
                  },
                  ...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  }),
                }}
              />
              {errors.email && (
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgb(255, 71, 71)",
                    fontSize: "10px",
                  }}
                >
                  {errors.email.type === "required" &&
                    "Ce champ est obligatoire."}
                  {errors.email.type === "pattern" && "Adresse mail invalide."}
                </Typography>
              )}
              <TextField
                fullWidth
                label="Numéro de téléphone"
                variant="standard"
                InputProps={{
                  sx: {
                    borderBottom: "1px solid #ccc",
                  },
                  ...register("phoneNumber", {
                    pattern:
                      /^(?:(?:(?:\+|00)33[\s.-]?)|0)[1-9](?:(?:[\s.-]?[0-9]{2}){4})$/,
                  }),
                }}
              />
              {errors.phoneNumber && (
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgb(255, 71, 71)",
                    fontSize: "10px",
                  }}
                >
                  Numéro de téléphone invalide
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
                    borderBottom: "1px solid #ccc",
                  },
                  ...register("message", {
                    required: true,
                  }),
                }}
              />
              {errors.message && (
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgb(255, 71, 71)",
                    fontSize: "10px",
                  }}
                >
                  Ce champ est obligatoire.
                </Typography>
              )}
              <Button
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                onClick={handleSubmit(onSubmit)}
                sx={{ marginTop: "1rem" }}
              >
                Envoyer le message
              </Button>
            </form>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src={handIMG}
            alt="hand"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Grid>
      </Grid>
      {/* Snackbar pour afficher la confirmation */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          severity="success"
          onClose={handleSnackbarClose}
        >
          Votre message a été envoyé avec succès!
        </MuiAlert>
      </Snackbar>
    </Container>
  );
};

export default Contact;


import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Checkbox,
  Button,
  Typography,
  TextField,
  FormControlLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundImage: `url('https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  container: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  card: {
    maxWidth: 345,
    width: "100%",
    margin: theme.spacing(2),
    padding: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: theme.spacing(4),
  },
  title: {
    color: "#fff",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
  },
  actions: {
    marginTop: theme.spacing(2),
  },
  signUpLink: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: theme.spacing(2),
  },
  signUpText: {
    color: "#2196F3",
    fontWeight: "bold",
    marginLeft: theme.spacing(1),
  },
}));

function SignIn() {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('localhost:8000/register', { email, password, isManager: false })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className={classes.root}>
      <div className={classes.overlay}></div>
      <div className={classes.container}>
        <Card className={classes.card}>
          <CardHeader className={classes.header} title="Sign In" />
          <CardContent>
            <form className={classes.form} onSubmit={handleSubmit}>
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                type="email"
                required
                fullWidth
                autoFocus
                onChange={handleEmailChange}
              />
              <TextField
                id="password"
                label="Password"
                variant="outlined"
                type="password"
                required
                fullWidth
                onChange={handlePasswordChange}
              />
              <FormControlLabel
                control={<Checkbox id="rememberMe" color="primary" />}
                label="Remember Me"
              />
            </form>
          </CardContent>
          <CardActions className={classes.actions}>
            <Button variant="contained" color="primary" fullWidth>
              Sign In
            </Button>
          </CardActions>
          <div className={classes.signUpLink}>
            <Typography variant="body2">Don't have an account?</Typography>
            <Link to="/auth/sign-up" className={classes.signUpText}>
              Sign up
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default SignIn;

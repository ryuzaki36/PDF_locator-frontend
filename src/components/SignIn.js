import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    axios
      .post("http://localhost:8000/login", { email, password })
      .then((res) => {
        const { authorID,email } = res.data;
        if (authorID) {
          localStorage.setItem("token", authorID);
          localStorage.setItem("email", email);
          history.push("/dashboard");
        }
      })
      .catch((error) => {
        alert("login failed");
      });
  };

  return (
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="content-wrapper d-flex align-items-center auth">
          <div className="row w-100">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left p-5">
                <div className="brand-logo">
                  <img src="../../images/logo.svg" alt="logo" />
                </div>
                <h4>Hello! let's get started</h4>
                <h6 className="font-weight-light">Sign in to continue.</h6>
                <form className="pt-3">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      id="exampleInputEmail1"
                      placeholder="Username"
                      onChange={handleEmailChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      onChange={handlePasswordChange}
                    />
                  </div>
                  <div className="mt-3" onClick={handleSubmit}>
                    <a className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">
                      SIGN IN
                    </a>
                  </div>
                  <div className="my-2 d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <label className="form-check-label text-muted">
                        <input type="checkbox" className="form-check-input" />
                        Keep me signed in
                      </label>
                    </div>
                    <a href="#" className="auth-link text-black">
                      Forgot password?
                    </a>
                  </div>

                  <div className="text-center mt-4 font-weight-light">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-primary">
                      Create
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* content-wrapper ends */}
      </div>
      {/* page-body-wrapper ends */}
    </div>
  );
}

export default SignIn;

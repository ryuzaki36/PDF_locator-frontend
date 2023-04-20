import axios from "axios";
import cogoToast from "cogo-toast";
import React, { useState } from "react";

const Settings = () => {
  const [showCreateUserForm, setShowCreateUserForm] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userIsAdmin, setUserIsAdmin] = useState(false);

const isAdmin = JSON.parse(localStorage.getItem("is_manager"));

  const handleCreateUserClick = () => {
    setShowCreateUserForm(true);
  };

  const handleCreateUserFormSubmit = (event) => {
    event.preventDefault();
    const payload = {
        email: userEmail,
        password: userPassword,
        is_manager: userIsAdmin
    }
    axios
    .post("http://localhost:8000/register", payload)
    .then((res) => {
      const { authorID} = res.data;
      if (authorID) {
        cogoToast.success("User Created Successfully", {
            position: "bottom-center",
            hideAfter: 5,
            loader: true,
            showCloseButton: false,
            onClick: () => {},
            onClose: () => {},
          });
        setShowCreateUserForm(false)
      }
    })
    .catch((error) => {
        cogoToast.error("Error Creating User", {
            position: "bottom-center",
            hideAfter: 5,
            loader: true,
            showCloseButton: false,
            onClick: () => {},
            onClose: () => {},
          });
    });
  };

  return (
    <div className="container mt-3">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">User Management</h4>
            </div>
            <div className="card-body">
              {isAdmin ? (
                <>
                  <div className="mb-3">
                    <button className="btn btn-success" onClick={handleCreateUserClick}>
                      Create User
                    </button>
                  </div>
                  {showCreateUserForm && (
                    <form onSubmit={handleCreateUserFormSubmit}>
                      <div className="mb-3">
                        <label htmlFor="user-email" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="user-email"
                          value={userEmail}
                          onChange={(event) => setUserEmail(event.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="user-password" className="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="user-password"
                          value={userPassword}
                          onChange={(event) => setUserPassword(event.target.value)}
                          required
                         
                        />
                      </div>
                      <div className="mb-3 form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="user-is-admin"
                          checked={userIsAdmin}
                          onChange={(event) => setUserIsAdmin(event.target.checked)}
                          style={{
                            marginLeft:"8px"
                          }}
                        />
                        <label htmlFor="user-is-admin" className="form-check-label" style={{marginTop:"5px"}}>
                          Is Admin?
                        </label>
                      </div>
                      <div className="d-grid">
                        <button type="submit" className="btn btn-primary">
                          Create
                        </button>
                      </div>
                    </form>
                  )}
                </>
              ) : (
                <div className="text-center">
                  <h5>Only Admins can view this page</h5>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;

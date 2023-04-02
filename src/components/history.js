import React from "react";
import PdfLocator from "../PdfLocator";
import { Link } from "react-router-dom";
import { HistoryContent } from "./historyContent";

const History = () => {
  return (
    <div className="container-scroller">
      {/* partial:partials/_navbar.html */}
      <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row default-layout-navbar">
        <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
          <a className="navbar-brand brand-logo" href="index-2.html">
            <img src="images/logo.svg" alt="logo" />
          </a>
          <a className="navbar-brand brand-logo-mini" href="index-2.html">
            <img src="images/logo-mini.svg" alt="logo" />
          </a>
        </div>
        <div className="navbar-menu-wrapper d-flex align-items-stretch">
          <button
            className="navbar-toggler navbar-toggler align-self-center"
            type="button"
            data-toggle="minimize"
          >
            <span className="fas fa-bars" />
          </button>
          <ul className="navbar-nav">
            <li className="nav-item nav-search d-none d-md-flex">
              <div className="nav-link">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-search" />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </div>
              </div>
            </li>
          </ul>
          <ul className="navbar-nav navbar-nav-right">
            <li className="nav-item d-none d-lg-flex">
              <a className="nav-link" href="#">
                <span className="btn btn-primary">+ Create new</span>
              </a>
            </li>
            <li className="nav-item dropdown d-none d-lg-flex">
              <div className="nav-link">
                <span
                  className="dropdown-toggle btn btn-outline-dark"
                  id="languageDropdown"
                  data-toggle="dropdown"
                >
                  English
                </span>
                <div
                  className="dropdown-menu navbar-dropdown"
                  aria-labelledby="languageDropdown"
                >
                  <a className="dropdown-item font-weight-medium" href="#">
                    French
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item font-weight-medium" href="#">
                    Espanol
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item font-weight-medium" href="#">
                    Latin
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item font-weight-medium" href="#">
                    Arabic
                  </a>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link count-indicator dropdown-toggle"
                id="notificationDropdown"
                href="#"
                data-toggle="dropdown"
              >
                <i className="fas fa-bell mx-0" />
                <span className="count">16</span>
              </a>
              <div
                className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                aria-labelledby="notificationDropdown"
              >
                <a className="dropdown-item">
                  <p className="mb-0 font-weight-normal float-left">
                    You have 16 new notifications
                  </p>
                  <span className="badge badge-pill badge-warning float-right">
                    View all
                  </span>
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-danger">
                      <i className="fas fa-exclamation-circle mx-0" />
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <h6 className="preview-subject font-weight-medium">
                      Application Error
                    </h6>
                    <p className="font-weight-light small-text">Just now</p>
                  </div>
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-warning">
                      <i className="fas fa-wrench mx-0" />
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <h6 className="preview-subject font-weight-medium">
                      Settings
                    </h6>
                    <p className="font-weight-light small-text">
                      Private message
                    </p>
                  </div>
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-info">
                      <i className="far fa-envelope mx-0" />
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <h6 className="preview-subject font-weight-medium">
                      New user registration
                    </h6>
                    <p className="font-weight-light small-text">2 days ago</p>
                  </div>
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link count-indicator dropdown-toggle"
                id="messageDropdown"
                href="#"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-envelope mx-0" />
                <span className="count">25</span>
              </a>
              <div
                className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                aria-labelledby="messageDropdown"
              >
                <div className="dropdown-item">
                  <p className="mb-0 font-weight-normal float-left">
                    You have 7 unread mails
                  </p>
                  <span className="badge badge-info badge-pill float-right">
                    View all
                  </span>
                </div>
                <div className="dropdown-divider" />
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <img
                      src="images/faces/face4.jpg"
                      alt="image"
                      className="profile-pic"
                    />
                  </div>
                  <div className="preview-item-content flex-grow">
                    <h6 className="preview-subject ellipsis font-weight-medium">
                      David Grey
                      <span className="float-right font-weight-light small-text">
                        1 Minutes ago
                      </span>
                    </h6>
                    <p className="font-weight-light small-text">
                      The meeting is cancelled
                    </p>
                  </div>
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <img
                      src="images/faces/face2.jpg"
                      alt="image"
                      className="profile-pic"
                    />
                  </div>
                  <div className="preview-item-content flex-grow">
                    <h6 className="preview-subject ellipsis font-weight-medium">
                      Tim Cook
                      <span className="float-right font-weight-light small-text">
                        15 Minutes ago
                      </span>
                    </h6>
                    <p className="font-weight-light small-text">
                      New product launch
                    </p>
                  </div>
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <img
                      src="images/faces/face3.jpg"
                      alt="image"
                      className="profile-pic"
                    />
                  </div>
                  <div className="preview-item-content flex-grow">
                    <h6 className="preview-subject ellipsis font-weight-medium">
                      {" "}
                      Johnson
                      <span className="float-right font-weight-light small-text">
                        18 Minutes ago
                      </span>
                    </h6>
                    <p className="font-weight-light small-text">
                      Upcoming board meeting
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="nav-item nav-profile dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-toggle="dropdown"
                id="profileDropdown"
              >
                <img src="images/faces/face5.jpg" alt="profile" />
              </a>
              <div
                className="dropdown-menu dropdown-menu-right navbar-dropdown"
                aria-labelledby="profileDropdown"
              >
                <a className="dropdown-item">
                  <i className="fas fa-cog text-primary" />
                  Settings
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item">
                  <i className="fas fa-power-off text-primary" />
                  Logout
                </a>
              </div>
            </li>
            <li className="nav-item nav-settings d-none d-lg-block">
              <a className="nav-link" href="#">
                <i className="fas fa-ellipsis-h" />
              </a>
            </li>
          </ul>
          <button
            className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
            type="button"
            data-toggle="offcanvas"
          >
            <span className="fas fa-bars" />
          </button>
        </div>
      </nav>
      {/* partial */}
      <div className="container-fluid page-body-wrapper">
        {/* partial:partials/_settings-panel.html */}
        <div className="theme-setting-wrapper">
          <div id="settings-trigger">
            <i className="fas fa-fill-drip" />
          </div>
          <div id="theme-settings" className="settings-panel">
            <i className="settings-close fa fa-times" />
            <p className="settings-heading">SIDEBAR SKINS</p>
            <div
              className="sidebar-bg-options selected"
              id="sidebar-light-theme"
            >
              <div className="img-ss rounded-circle bg-light border mr-3" />
              Light
            </div>
            <div className="sidebar-bg-options" id="sidebar-dark-theme">
              <div className="img-ss rounded-circle bg-dark border mr-3" />
              Dark
            </div>
            <p className="settings-heading mt-2">HEADER SKINS</p>
            <div className="color-tiles mx-0 px-4">
              <div className="tiles primary" />
              <div className="tiles success" />
              <div className="tiles warning" />
              <div className="tiles danger" />
              <div className="tiles info" />
              <div className="tiles dark" />
              <div className="tiles default" />
            </div>
          </div>
        </div>
        <div id="right-sidebar" className="settings-panel">
          <i className="settings-close fa fa-times" />
          <ul className="nav nav-tabs" id="setting-panel" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="todo-tab"
                data-toggle="tab"
                href="#todo-section"
                role="tab"
                aria-controls="todo-section"
                aria-expanded="true"
              >
                TO DO LIST
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="chats-tab"
                data-toggle="tab"
                href="#chats-section"
                role="tab"
                aria-controls="chats-section"
              >
                CHATS
              </a>
            </li>
          </ul>
          <div className="tab-content" id="setting-content">
            <div
              className="tab-pane fade show active scroll-wrapper"
              id="todo-section"
              role="tabpanel"
              aria-labelledby="todo-section"
            >
              <div className="add-items d-flex px-3 mb-0">
                <form className="form w-100">
                  <div className="form-group d-flex">
                    <input
                      type="text"
                      className="form-control todo-list-input"
                      placeholder="Add To-do"
                    />
                    <button
                      type="submit"
                      className="add btn btn-primary todo-list-add-btn"
                      id="add-task-todo"
                    >
                      Add
                    </button>
                  </div>
                </form>
              </div>
              <div className="list-wrapper px-3">
                <ul className="d-flex flex-column-reverse todo-list">
                  <li>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input className="checkbox" type="checkbox" />
                        Team review meeting at 3.00 PM
                      </label>
                    </div>
                    <i className="remove fa fa-times-circle" />
                  </li>
                  <li>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input className="checkbox" type="checkbox" />
                        Prepare for presentation
                      </label>
                    </div>
                    <i className="remove fa fa-times-circle" />
                  </li>
                  <li>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input className="checkbox" type="checkbox" />
                        Resolve all the low priority tickets due today
                      </label>
                    </div>
                    <i className="remove fa fa-times-circle" />
                  </li>
                  <li className="completed">
                    <div className="form-check">
                      <label className="form-check-label">
                        <input
                          className="checkbox"
                          type="checkbox"
                          defaultChecked=""
                        />
                        Schedule meeting for next week
                      </label>
                    </div>
                    <i className="remove fa fa-times-circle" />
                  </li>
                  <li className="completed">
                    <div className="form-check">
                      <label className="form-check-label">
                        <input
                          className="checkbox"
                          type="checkbox"
                          defaultChecked=""
                        />
                        Project review
                      </label>
                    </div>
                    <i className="remove fa fa-times-circle" />
                  </li>
                </ul>
              </div>
              <div className="events py-4 border-bottom px-3">
                <div className="wrapper d-flex mb-2">
                  <i className="fa fa-times-circle text-primary mr-2" />
                  <span>Feb 11 2018</span>
                </div>
                <p className="mb-0 font-weight-thin text-gray">
                  Creating component page
                </p>
                <p className="text-gray mb-0">build a js based app</p>
              </div>
              <div className="events pt-4 px-3">
                <div className="wrapper d-flex mb-2">
                  <i className="fa fa-times-circle text-primary mr-2" />
                  <span>Feb 7 2018</span>
                </div>
                <p className="mb-0 font-weight-thin text-gray">
                  Meeting with Alisa
                </p>
                <p className="text-gray mb-0 ">Call Sarah Graves</p>
              </div>
            </div>
            {/* To do section tab ends */}
            <div
              className="tab-pane fade"
              id="chats-section"
              role="tabpanel"
              aria-labelledby="chats-section"
            >
              <div className="d-flex align-items-center justify-content-between border-bottom">
                <p className="settings-heading border-top-0 mb-3 pl-3 pt-0 border-bottom-0 pb-0">
                  Friends
                </p>
                <small className="settings-heading border-top-0 mb-3 pt-0 border-bottom-0 pb-0 pr-3 font-weight-normal">
                  See All
                </small>
              </div>
              <ul className="chat-list">
                <li className="list active">
                  <div className="profile">
                    <img src="images/faces/face1.jpg" alt="image" />
                    <span className="online" />
                  </div>
                  <div className="info">
                    <p>Thomas Douglas</p>
                    <p>Available</p>
                  </div>
                  <small className="text-muted my-auto">19 min</small>
                </li>
                <li className="list">
                  <div className="profile">
                    <img src="images/faces/face2.jpg" alt="image" />
                    <span className="offline" />
                  </div>
                  <div className="info">
                    <div className="wrapper d-flex">
                      <p>Catherine</p>
                    </div>
                    <p>Away</p>
                  </div>
                  <div className="badge badge-success badge-pill my-auto mx-2">
                    4
                  </div>
                  <small className="text-muted my-auto">23 min</small>
                </li>
                <li className="list">
                  <div className="profile">
                    <img src="images/faces/face3.jpg" alt="image" />
                    <span className="online" />
                  </div>
                  <div className="info">
                    <p>Daniel Russell</p>
                    <p>Available</p>
                  </div>
                  <small className="text-muted my-auto">14 min</small>
                </li>
                <li className="list">
                  <div className="profile">
                    <img src="images/faces/face4.jpg" alt="image" />
                    <span className="offline" />
                  </div>
                  <div className="info">
                    <p>James Richardson</p>
                    <p>Away</p>
                  </div>
                  <small className="text-muted my-auto">2 min</small>
                </li>
                <li className="list">
                  <div className="profile">
                    <img src="images/faces/face5.jpg" alt="image" />
                    <span className="online" />
                  </div>
                  <div className="info">
                    <p>Madeline Kennedy</p>
                    <p>Available</p>
                  </div>
                  <small className="text-muted my-auto">5 min</small>
                </li>
                <li className="list">
                  <div className="profile">
                    <img src="images/faces/face6.jpg" alt="image" />
                    <span className="online" />
                  </div>
                  <div className="info">
                    <p>Sarah Graves</p>
                    <p>Available</p>
                  </div>
                  <small className="text-muted my-auto">47 min</small>
                </li>
              </ul>
            </div>
            {/* chat tab ends */}
          </div>
        </div>
        {/* partial */}
        {/* partial:partials/_sidebar.html */}
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
          <ul className="nav">
            <li className="nav-item nav-profile">
              <div className="nav-link">
                <div className="profile-image">
                  <img src="images/faces/face5.jpg" alt="image" />
                </div>
                <div className="profile-name">
                  <p className="name">Welcome Jane</p>
                  <p className="designation">Super Admin</p>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                <i className="fa fa-book menu-icon" />
                <span className="menu-title">PDF Locator</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/history">
                <i className="fa fa-home menu-icon" />
                <span style={{ color: "blueviolet" }} className="menu-title">
                  History
                </span>
              </Link>
            </li>
          </ul>
        </nav>
        {/* partial */}
        <div className="main-panel">
          <div className="content-wrapper">
            <HistoryContent />
          </div>
          {/* content-wrapper ends */}
          {/* partial:partials/_footer.html */}
          <footer className="footer">
            <div className="d-sm-flex justify-content-center justify-content-sm-between">
              <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
                Copyright © 2018. All rights reserved.
              </span>
              <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
                Hand-crafted &amp; made with{" "}
                <i className="far fa-heart text-danger" />
              </span>
            </div>
          </footer>
          {/* partial */}
        </div>
        {/* main-panel ends */}
      </div>
      {/* page-body-wrapper ends */}
    </div>
  );
};

export default History;

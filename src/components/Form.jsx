import React from "react";
import "./form.css";
const Header = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignUp,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;
  return (
    <>
      <h1>Devstree-Assignment</h1>
      <a href="https://www.devstree.com/" className="logo" target="_blank">
        <img src="./img/logo.png" alt="companey-logo" />
      </a>
      <div className="section">
        <div className="container">
          <div className="row full-height justify-content-center">
            <div className="col-12 text-center align-self-center py-5">
              <div className="section pb-5 pt-5 pt-sm-2 text-center">
                <h6 className="mb-0 pb-3">
                  <span>Log In </span>
                  <span>Sign Up</span>
                </h6>

                <input
                  className="checkbox"
                  type="checkbox"
                  id="reg-log"
                  name="reg-log"
                />

                <label for="reg-log" className="pt-3"></label>
                <p>Don't have an account ? </p>
                <div className="card-3d-wrap mx-auto">
                  <div className="card-3d-wrapper">
                    {/* -----------------------------------------login form----------------------------------------------- */}
                    <div className="card-front">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">Log In</h4>
                          <div className="form-group">
                            {" "}
                            <input
                              type="email"
                              name="logemail"
                              className="form-style"
                              placeholder="Your Email"
                              id="logemail"
                              autocomplete="off"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />{" "}
                            <i className="input-icon uil uil-at"></i>{" "}
                          </div>
                          <p className="errorMsg">{emailError}</p>
                          <div className="form-group mt-2">
                            {" "}
                            <input
                              type="password"
                              name="logpass"
                              className="form-style"
                              placeholder="Your Password"
                              id="logpass"
                              autocomplete="off"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />{" "}
                            <i className="input-icon uil uil-lock-alt"></i>{" "}
                          </div>{" "}
                          <p className="errorMsg">{passwordError}</p>
                          <p className="mb-0 mt-4 text-center">
                            <div className="btnContainer">
                              {hasAccount ? (
                                <>
                                  <button
                                    onClick={handleLogin}
                                    className="btn mt-4"
                                  >
                                    sign in
                                  </button>
                                </>
                              ) : (
                                <>
                                  <button onClick={handleSignUp}>
                                    sign up
                                  </button>
                                </>
                              )}
                            </div>
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* -----------------------------------------------sign up form------------------------------------------------------------------------- */}
                    <div className="card-back">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">Sign Up</h4>
                          <div className="form-group">
                            {" "}
                            <input
                              type="text"
                              name="logname"
                              className="form-style"
                              placeholder="Your Full Name"
                              id="logname"
                              autocomplete="off"
                            />{" "}
                            <i className="input-icon uil uil-user"></i>{" "}
                          </div>
                          <div className="form-group mt-2">
                            {" "}
                            <input
                              type="email"
                              name="logemail"
                              className="form-style"
                              placeholder="Your Email"
                              id="logemail"
                              autocomplete="off"
                            />{" "}
                            <i className="input-icon uil uil-at"></i>{" "}
                          </div>
                          <div className="form-group mt-2">
                            {" "}
                            <input
                              type="password"
                              name="logpass"
                              className="form-style"
                              placeholder="Your Password"
                              id="logpass"
                              autocomplete="off"
                            />{" "}
                            <i className="input-icon uil uil-lock-alt"></i>{" "}
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="text"
                              name="logpass"
                              className="form-style"
                              placeholder="Your phone no"
                              id="logpass"
                              autocomplete="off"
                            />
                            <i className="input-icon uil uil-lock-alt"></i>
                          </div>

                          <div className="form-group mt-2">
                            <input
                              type="date"
                              name="logpass"
                              className="form-style"
                              placeholder="Your DOB"
                              id="logpass"
                              autocomplete="off"
                            />
                            <i className="input-icon uil uil-lock-alt"></i>
                          </div>
                          <a href="#" className="btn mt-4">
                            submit
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

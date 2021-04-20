import React from 'react'
import "./Login.css"
function Login(props) {

    const {
        email,
        setEmail,
        password,
        setPassword,
        emailError,
        setEmailError,
        passwordError,
        setPasswordError,
        handleLogin,
        hasAccount,
        setHasAccount,
     } = props;

    return (
        <section className="login">
            <div className="loginContainer">
                <label>UserName</label>
                <input
                    type="text"
                    className="form-control"
                    onChange={(event) => setEmail(event.target.value)}
                    value={email}
                  />
                  <p className="errorMsg">
                      {emailError}
                  </p>

                  <label>Password</label>
                <input
                    type="password"
                    className="form-control"
                    onChange={(event) => setPassword(event.target.value)}
                    value={password}
                  />
                  <p className="errorMsg">
                      {passwordError}
                  </p>

                  <div className="btnContainer">
                        <button className="sign" onClick={handleLogin}>
                            Sign In
                        </button>
                  </div>
            </div>
        </section>
    )
}

export default Login

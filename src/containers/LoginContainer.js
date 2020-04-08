import React, { useState } from "react";
import LoginScreenComponent from '../login/LoginScreenComponent';
import SignupScreenComponent from '../signup/SignupScreenComponent';

const LoginContainer = () => {

  const [loggingIn, setLoggingIn] = useState(true);

  const signUpHandler = () => setLoggingIn(false);
  
  return (
    <>
      <div className="container-fluid">
        <div className="row whole-page">
          <div className="col-5 login-left">
            <p className="middle">
              NEU
              <br />
              <span className="offset">Polls</span>
            </p>
          </div>
          <div className="col-7">
            <div className="p-3">
              {loggingIn ? 
                <LoginScreenComponent signUpHandler={signUpHandler}/> :
                <SignupScreenComponent/>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginContainer;

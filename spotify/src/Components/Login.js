import React from 'react';
import LoginStyle from './Login.module.css';
import { Link } from 'react-router-dom';

function LoginForm() {
  return (
    <div className={LoginStyle.main}>

      <form action="" name="myform" method="post">

        <div className={LoginStyle.loginpages}>
          <Link to='/'>
            <p className={LoginStyle.button + ' ' + LoginStyle.back}>Back</p>
            </Link>
          <div className={LoginStyle.loginpage}>

            <div className={LoginStyle.inputs}>
              <label htmlFor="email">
                Email
              </label>
              <div>
                <input type="email" name="email" required />
              </div>
            </div>
            <div className={LoginStyle.inputs}>
              <label htmlFor="password">
                password
              </label>
              <div>
                <input type="password" name="password" id="password" required />
              </div>
            </div>
            <div className={LoginStyle.inputs}>
              <Link to='/UserHome'><button className={LoginStyle.button}>Login In</button></Link>
            </div>
            <div className={LoginStyle.inputs}>
              <span className={`${LoginStyle.signup} ${LoginStyle['forgot-password']}`}>
                <a href="http://192.168.43.94:5001/resetpassword">Forgot your password?</a>
              </span>
            </div>
            <div>
              <p className={LoginStyle.line}></p>
            </div>
            <div className={LoginStyle.inputs}>
              <p>Don't have an account <span className={LoginStyle.signup}>
                <a href="http://192.168.43.94:5001/signup">Sign up</a>
              </span></p>
            </div>

          </div>
        </div>
      </form>
    </div>
  )
}

export default LoginForm;

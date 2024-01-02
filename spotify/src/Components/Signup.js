import React from 'react'
import SignupStyle from './Signup.module.css'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className={`${SignupStyle['main']}`}>
    <div className={`${SignupStyle['loginpages']}`}>
        <Link to='/'>
            <p className={`${SignupStyle['button']} ${SignupStyle['back']}`}>Back</p>
        </Link>
        <div className={`${SignupStyle['loginpage']}`}>
            <h1>Signup to start listening</h1>
            <form action="" method="post">
                <div className={`${SignupStyle['inputs']}`}>
                    <label htmlFor="username">
                        Username
                    </label>
                    <div>
                        <input type="username" name="username" required />
                    </div>
                </div>
                <div className={`${SignupStyle['inputs']}`}>
                    <label htmlFor="email">
                        Email
                    </label>
                    <div>
                        <input type="email" name="email" required />
                    </div>
                </div>
                <div className={`${SignupStyle['inputs']}`}>
                    <label htmlFor="password">
                        Create Password
                    </label>
                    <div>
                        <input type="password" name="password" required />
                    </div>
                </div>
                <div className={`${SignupStyle['inputs']}`}>
                    <Link to='/Login'><button className={`${SignupStyle['button']}`} type="submit">Signup</button></Link>
                </div>
                <div className={`${SignupStyle['inputs']}`}>
                    <p>{/* {{message.upper()}} */}</p>
                </div>
            </form>
        </div>
    </div>
</div>
  )
}

export default Signup

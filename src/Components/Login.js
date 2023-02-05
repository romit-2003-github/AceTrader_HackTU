import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <div className="loginContainer">
                <div className="login">
                    <div className="loginForm">
                        <h4 className='my-5 text-dark text-center'>Sign in to your Account</h4>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">User ID/Email ID</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your ID" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Enter your password" />
                        </div>
                        
                        <button type='button' class='btn btn-primary my-3'>Sign In</button>
                        <button type="button" className="btn btn-primary mx-3"><Link to={"/Account"}>Create Account <span>&#8594;</span></Link></button>

                    </div>
                </div>
                <div className="loginWindow">
                    <div className="marketPhoto">
                        <img src={require("./marketPhoto.png") } alt="" />
                    <div className="loginWindowText">

                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login

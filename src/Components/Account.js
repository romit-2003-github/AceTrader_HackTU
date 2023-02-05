import React from 'react'

const Account = () => {
  return (
    <>
            <div className="loginContainer">
                <div className="login">
                    <div className="loginForm">
                        <h4 className='my-5 text-dark text-center'>Create Your Account</h4>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Enter your Name</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your Name here" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Enter your User ID/Email ID</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your ID here" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Enter Mobile Number</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your Mobile No. here" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Set a Password</label>
                            <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Set your password here" />
                        </div>
                        
                        <button type='button' class='btn btn-primary my-3 mx-3'>Create Account</button>
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

export default Account

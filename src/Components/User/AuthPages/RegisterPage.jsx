import React from 'react'
import { Link } from 'react-router-dom';

function RegisterPage() {
    return (
        <>
            <div className="login-wrapper">
                <div className="container-center lg">
                    <div className="login-area">
                        <div className="panel panel-bd panel-custom">
                            <div className="panel-heading">
                                <div className="view-header">
                                    <div className="header-icon">
                                        <i className="pe-7s-unlock"></i>
                                    </div>
                                    <div className="header-title">
                                        <h3>Register</h3>
                                        <small><strong>Please enter your data to register.</strong></small>
                                    </div>
                                </div>
                            </div>
                            <div className="panel-body">
                                <form action="http://thememinister.com/crm/index.html" id="loginForm" >
                                    <div className="row">
                                        <div className="form-group col-lg-3">
                                            <label htmlFor='first_name'>First Name</label>
                                            <input type="text" id="first_name" className="form-control" name="first_name" placeholder='First Name' />
                                            {/* <span className="help-block small">Your unique username to app</span> */}
                                        </div>
                                        <div className="form-group col-lg-3">
                                            <label htmlFor='last_name'>Last Name</label>
                                            <input type="text" id="last_name" className="form-control" name="last_name" placeholder='Last Name' />
                                            {/* <span className="help-block small">Your unique username to app</span> */}
                                        </div>
                                        <div className="form-group col-lg-6">
                                            <label>Email Address</label>
                                            <input type="text" id="email" className="form-control" name="email" />
                                            <span className="help-block small">Your address email to contact</span>
                                        </div>
                                        <div className="form-group col-lg-6">
                                            <label>Repeat Password</label>
                                            <input type="password" id="repeatpassword" className="form-control" name="repeatpassword" />
                                            <span className="help-block small">Please repeat your pasword</span>
                                        </div>
                                        <div className="form-group col-lg-6">
                                            <label>Repeat Password</label>
                                            <input type="password" id="repeatpassword" className="form-control" name="repeatpassword" />
                                            <span className="help-block small">Please repeat your pasword</span>
                                        </div>

                                    </div>
                                    <div>
                                        <button className="btn btn-warning">Register</button>
                                        <Link className="btn btn-add" to="/auth/login">Login</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegisterPage
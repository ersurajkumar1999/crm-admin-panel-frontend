import React from 'react'
import { Link } from 'react-router-dom';
function LoginPage() {
    return (
        <div className="login-wrapper">
            <div className="container-center">
                <div className="login-area">
                    <div className="panel panel-bd panel-custom">
                        <div className="panel-heading">
                            <div className="view-header">
                                <div className="header-icon">
                                    <i className="pe-7s-unlock"></i>
                                </div>
                                <div className="header-title">
                                    <h3>Login</h3>
                                    <small><strong>Please enter your credentials to login.</strong></small>
                                </div>
                            </div>
                        </div>
                        <div className="panel-body">
                            <form action="http://thememinister.com/crm/index.html" id="loginForm">
                                <div className="form-group">
                                    <label className="control-label" htmlFor="username">Username</label>
                                    <input type="text" placeholder="example@gmail.com" title="Please enter you username" name="username" id="username" className="form-control" />
                                    <span className="help-block small">Your unique username to app</span>
                                </div>
                                <div className="form-group">
                                    <label className="control-label" htmlFor="password">Password</label>
                                    <input type="password" title="Please enter your password" placeholder="******" name="password" id="password" className="form-control" />
                                    <span className="help-block small">Your strong password</span>
                                </div>
                                <div>
                                    <button className="btn btn-add">Login</button>
                                    <Link className="btn btn-warning" to="/auth/register">Register</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
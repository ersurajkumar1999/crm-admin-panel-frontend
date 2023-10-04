import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import userAuth from '../../../Services/UserAuth';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LoginPage() {
    const [user, setUser] = useState(null);

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const validationSchema = Yup.object().shape({
        email: Yup.string().required("Email is required").email("Email is invalid"),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters')
            .max(40, 'Password must not exceed 40 characters'),
    });
    const formOptions = { resolver: yupResolver(validationSchema) };
    // get functions to build form with useForm() hook
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState

    async function onSubmit(e) {
        setLoading(true);
        const response = await userAuth.doLogin(e);
        if (response.status) {
            toast.success(response.message);
            localStorage.setItem('crm_user', JSON.stringify(response.data))
            localStorage.setItem('authenticated', JSON.stringify(true));
            console.log("response==>", response.data);
            setUser(response.data);
            setLoading(false);
            navigate('/user/dashboard');
        } else {
            toast.error(response.message);
            setLoading(false);
        }
        //Backend API Call operation is handled here.
    }
    useEffect(() => {
        if (!user) {
            const authenticated = localStorage.getItem('authenticated');
            if (authenticated) {
                navigate('/user/dashboard');
                console.log("authenticated==>", authenticated);
            }
        }
    }, [user]);
    return (
        <div className="login-wrapper">
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
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
                            <form onSubmit={handleSubmit(onSubmit)} id="reset">
                                <div className="form-group">
                                    <label className="control-label" htmlFor="email">Email</label>
                                    <input type="text"
                                        placeholder="example@gmail.com"
                                        title="Please enter you email"
                                        name="email"
                                        id="email"
                                        className="form-control"
                                        {...register("email")}
                                    />
                                    <span className="help-block small">{errors.email?.message}</span>
                                </div>
                                <div className="form-group">
                                    <label className="control-label" htmlFor="password">Password</label>
                                    <input type="password"
                                        title="Please enter your password"
                                        placeholder="******"
                                        name="password"
                                        id="password"
                                        className="form-control"
                                        {...register("password")}
                                    />
                                    <span className="help-block small">{errors.password?.message}</span>
                                </div>
                                <div>
                                    <button disabled={loading} className="btn btn-add"> {loading ? 'Logging in...' : 'Login'}</button>
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
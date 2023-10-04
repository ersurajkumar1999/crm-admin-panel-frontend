import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import userAuth from '../../../Services/UserAuth';

function RegisterPage() {
    const validationSchema = Yup.object().shape({
        first_name: Yup.string().required('First Name is required'),
        last_name: Yup.string().required('Last Name is required'),
        email: Yup.string().required("Email is required").email("Email is invalid"),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters')
            .max(40, 'Password must not exceed 40 characters'),
        password2: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
        // acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required'),
    });
    const formOptions = { resolver: yupResolver(validationSchema) };
    // get functions to build form with useForm() hook
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState

    async function onSubmit(e) {
        console.log("eeee=>", e)
        //Backend API Call operation is handled here.
        const response = await userAuth.doRegister(e);
        console.log("response===>",response);
    }

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
                                <form onSubmit={handleSubmit(onSubmit)} >
                                    <div className="row">
                                        <div className="form-group col-lg-3">
                                            <label htmlFor='first_name'>First Name</label>
                                            <input type="text" id="first_name" {...register("first_name")} className="form-control" name="first_name" placeholder='First Name' />
                                            <span className="help-block small">{errors.first_name?.message}</span>
                                        </div>
                                        <div className="form-group col-lg-3">
                                            <label htmlFor='last_name'>Last Name</label>
                                            <input type="text" id="last_name"  {...register("last_name")} className="form-control" name="last_name" placeholder='Last Name' />
                                            <span className="help-block small">{errors.last_name?.message}</span>
                                        </div>
                                        <div className="form-group col-lg-6">
                                            <label>Email Address</label>
                                            <input type="text" id="email" {...register("email")} className="form-control" name="email" />
                                            <span className="help-block small">{errors.email?.message}</span>
                                        </div>
                                        <div className="form-group col-lg-6">
                                            <label>Repeat Password</label>
                                            <input type="password" id="password" {...register("password")} className="form-control" name="password" />
                                            <span className="help-block small">{errors.password?.message}</span>
                                        </div>
                                        <div className="form-group col-lg-6">
                                            <label>Repeat Password</label>
                                            <input type="password" id="password2" {...register("password2")} className="form-control" name="password2" />
                                            <span className="help-block small">{errors.password2?.message}</span>
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
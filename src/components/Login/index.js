import React from "react";

const Login = () => {
    return (
        <>
            <div className={'container m-2 p-4 bg-light shadow'}>
                <form>
                    <fieldset>
                        <legend className={'text-center mb-4'}>Welcome back!</legend>
                        <div className="form-group row mb-4">
                            <label htmlFor="InputEmail" className="col-sm-2 col-form-label">Email address</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control rounded-pill" id="InputEmail"
                                       placeholder="email@domain.com"/>
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                                    anyone else.</small>
                            </div>
                        </div>
                        <div className="form-group row mb-4">
                            <label htmlFor="InputPassword" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control rounded-pill" id="InputPassword"
                                       placeholder="Password"/>
                            </div>
                        </div>
                    </fieldset>
                </form>
                <div className={'container text-center'}>
                    <button className={'btn btn-primary bg-highlight rounded-pill border-0 mb-2'}>Login</button>
                    <div className={'row'}>
                        <a className={'text-center small text-muted'} href={'/#'}>Forgot your password?</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;


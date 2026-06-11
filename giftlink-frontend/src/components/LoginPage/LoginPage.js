
import React, { useState } from 'react';
import './LoginPage.css';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassWord] = useState('')

    const handleLogin = () => {
        console.log("Login Successful");
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4">
                    <div className="login-card p-4 border rounded">
                        <h2 className="text-center mb-4 font-weight-bold">Login</h2>

                        <div className="mb-4">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <br />
                            <input type="email" id="email" className="form-control" placeholder="Enter Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="password" className="form-label">Password:</label>
                            <br />
                            <input type="password" id="password" className="form-control" placeholder="Enter Your Password" value={password} onChange={(e) => setPassWord(e.target.value)} />
                        </div>

                        {/* insert code here to create a button that performs the `handleLogin` function on click */}
                        <button className="btn btn-primary w-100 mb-3" onClick={handleLogin}>Login</button>
                        <p className="mt-4 text-center">
                            New here? <a href="/app/register" className="text-primary">Register Here</a>
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;

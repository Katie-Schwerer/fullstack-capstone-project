import React, { useState } from "react";

function RegisterPage() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassWord] = useState("");

    const handleRegister = async () => {
        console.log("Register Invoked")
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4">
                    <div className="register-card p-4 border rounded">
                        <h2 className="text-center mb-4 font-weight-bold">Register</h2>
                        <label htmlFor="firstName" className="form-label">First Name:</label>
                        <br />
                        <input type="text" id="firstName" className="form-control" placeholder="Enter Your First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

                        <label htmlFor="firstName" className="form-label">Last Name:</label>
                        <br />
                        <input type="text" id="lastName" className="form-control" placeholder="Enter Your Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />

                        <label htmlFor="email" className="form-label">Email:</label>
                        <br />
                        <input type="email" id="email" className="form-control" placeholder="Enter Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />

                        <label htmlFor="password" className="form-label">Password:</label>
                        <br />
                        <input type="password" id="password" className="form-control" placeholder="Enter Your Password" value={password} onChange={(e) => setPassWord(e.target.value)} />

                        <button className="btn btn-primary w-100 mb-3 " onClick={handleRegister}>Register</button>
                        <p className="mt-4 text-center">
                            Already a member? <a href="/app/login" className="text-primary">Login</a>
                        </p>

                    </div>
                </div>
            </div>
        </div>

    )
}
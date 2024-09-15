import React, { useState } from 'react';
import './SignUp.css';

const SignUp = () => {
    const [userData, setUserData] = useState({
        firstName: "",
        secondName: "",
        email: "",
        password: "",
        phoneNumber: ""
    })
    const handleInputChange = (e) =>{
        const {name, value} = e.target;

        setUserData((prevData) => ({...prevData, [name] : value}))

    }
    const handleFormSubmit = (event) =>{
        event.preventDefault();
        console.log(userData)
    }
    return (
        <section className="sign-up-section">
            <div className="updated-text">
                <p>Hello, my name is <span style={{color: "dodgerblue"}}></span></p>
                <p>My email address is <span style={{color: "dodgerblue"}}></span></p>
                <p>and my phone number is <span style={{color: "dodgerblue"}}></span></p>
            </div>
            <form onSubmit={handleFormSubmit}>
                <div className="form-heading">
                    <h3>Sign Up</h3>
                    <p>Please fill in this form to create an account</p>
                </div>
                <div className="first-name">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        placeholder="Enter First Name"
                        name="firstName"
                        value={userData.firstName}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="second-name">
                    <label htmlFor="second-name">Last Name</label>
                    <input
                        type="text"
                        id="secondName"
                        placeholder="Enter Last Name"
                        name="secondName"
                        value={userData.secondName}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="email">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter Email Address"
                        value={userData.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="password">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Choose a Password"
                        value={userData.password}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="phoneNumber">
                    <label htmlFor="number">Phone Number</label>
                    <input
                        type="number"
                        name="phoneNumber"
                        id="phoneNumber"
                        placeholder="Enter Phone Number"
                        value={userData.phoneNumber}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="policy-text">
                    <p>
                        By creating an account you agree to our <a href="#" style={{textDecoration: 'none', color: "dodgerblue"}}>Terms & Policy</a>
                    </p>
                </div>
                <div className="submit-btn">
                    <button className="submit" type="submit">Sign Up</button>
                </div>
            </form>
        </section>
    );
};

export default SignUp;

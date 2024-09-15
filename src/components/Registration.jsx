import React, { useState } from 'react'
import './Registration.css'
const Registration = () => {
  const [userData, setUserData] = useState({
    studentName: "",
    fatherName: "",
    dob: "",
    nationality: "",
    mobile: "",
    landline: "",
    email: "",
    address: "",
    gender: "",
    blood: "",
    fPass: "",
    confirm: "",
  });
  const handleInputChange = (event) =>{
    const{name, value} = event.target;

    setUserData((prevData) => ({...prevData,[name]:value}));
  }
  /// Handling Form Submission and Form Behaviour
  const handleFormSubmit = (event) =>{
    event.preventDefault();
    console.log(userData);
    // Reset the form after submission
  }
  return (
    <div className='registration-form'>
      <form onSubmit={handleFormSubmit}>
        <div className="form-header">
          <h1>Cadet College Sialkot</h1>
          <h4>Faith, Discpline and Unity</h4>
        </div>
        {/* ==== Name Input Field === */}
        <div className="name-input">
          <div className="name">
            <label htmlFor="studentName">Name</label>
            <input type="text" name='studentName' id='studentName' value={userData.studentName} onChange={handleInputChange}/>
          </div>
          <div className="fName">
            <label htmlFor="fatherName">Father Name</label>
            <input type="text" name='fatherName' id='fatherName' value={userData.fatherName} onChange={handleInputChange}/>
          </div>
        </div>
        {/* ==== DOB And Nationality Field ==== */}
        <div className="dob-nation">
          <div className="dob">
            <label htmlFor="dob">Date of birth</label>
            <input type="date" name="dob" id="dob" placeholder='**/**/****' value={userData.dob} onChange={handleInputChange}/>
          </div>
          <div className="nation">
            <label htmlFor="nationality">Nationality</label>
            <input type="text" name='nationality' id='nationality' placeholder='Your Nationality' value={userData.nationality} onChange={handleInputChange}/>
          </div>
        </div>
        {/* ==== Address Field ==== */}
        <div className="address">
          <label htmlFor="address">Address</label>
          <input type="text" id='address' name='address' value={userData.address} onChange={handleInputChange}/>
        </div>
        {/* ==== User Contact Details Field ==== */}
        <div className="contact-info">
          <div className="mobile">
            <label htmlFor="mobile">Mobile No</label>
            <input type="number" name='mobile' id='mobile' value={userData.mobile} onChange={handleInputChange}/>
          </div>
          <div className="landline">
            <label htmlFor="landline">Landline</label>
            <input type="number" name='landline' id='landline' value={userData.landline} onChange={handleInputChange}/>
          </div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' name='email' value={userData.email} onChange={handleInputChange}/>
          </div>
        </div>
        {/* ==== User's Gender Field ==== */}
        <div className="gen-bg">
          <div className="gender">
            <label>Gender:</label>
            <input type="radio" name='gender' value={userData.gender === "Male"} onChange={handleInputChange}/>
            <label>Male</label>
            <input type="radio" name="gender" id="" value={userData.gender === 'Female'} onChange={handleInputChange}/>
            <label>Female</label>
          </div>
          <div className="blood">
            <label htmlFor="blood">Blood Group</label>
            <input type="text" name='blood' id='blood' value={userData.blood} onChange={handleInputChange}/>
          </div>
        </div>
        {/* ==== Password and Confirm Password Field ==== */}
        <div className="password-field">
          <div className="fPass">
            <label htmlFor="fPass">Password</label>
            <input type="password" name="fPass" id="fPass" value={userData.fPass} onChange={handleInputChange}/>
          </div>
          <div className="confirmPass">
            <label htmlFor="confirm">Cofirm Password</label>
            <input type="password" name='confirm' id='confirm' value={userData.confirm} onChange={handleInputChange}/>
          </div>
        </div>
        {/* ==== Submit Button ==== */}
        <div className="btn-box">
          <button className="submit-btn" type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Registration

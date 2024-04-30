import React, { useState } from 'react';
import "./form.scss"
import NavBar from '../../components/Navbar/NavBar';

const FormComponent = () => {
  <NavBar />
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform actions like sending form data to a server
    console.log(formData);
    // Reset form after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password:'',
    });
  };


  return (
    <div className="form-container">
      <h1 className='heading'>Create Your Account</h1>
      <form onSubmit={handleSubmit} className='from'>
        <label className='label' >
         <div className="name"> First Name :</div>
          <input
            type="text"
            name="firstName"
            className='input'
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label className='label' >
         <div className="name">Last Name :</div>

          
          <input
            type="text"
            className='input'
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label className='label' >
          
          <div className="name"> Email :</div>

          <input
            type="email"
            name="email"
            className='input'
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label className='label' >
        <div className="name"> Password :</div>

         
          <input
            type="password"
            name="password"
            className='input'
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>

  );
};

export default FormComponent;

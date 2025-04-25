import { useState } from 'react'
import './App.css'
import React from 'react'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    age: '',
    fatherName: '',
    motherName: '',
    city: '',
    state: '',
    country: '',
    college: '',
    semester: '',
    skills: ''
  })
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })};
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("form submitted",formData);
      alert("form submitted");
    };
    
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1>Student Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Gender:</label>
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label>Age:</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} required min="1" />
        </div>
        <div>
          <label>Father's Name:</label>
          <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} required />
        </div>
        <div>
          <label>Mother's Name:</label>
          <input type="text" name="motherName" value={formData.motherName} onChange={handleChange} required />
        </div>
        <div>
          <label>City:</label>
          <input type="text" name="city" value={formData.city} onChange={handleChange} required />
        </div>
        <div>
          <label>State:</label>
          <input type="text" name="state" value={formData.state} onChange={handleChange} required />
        </div>
        <div>
          <label>Country:</label>
          <input type="text" name="country" value={formData.country} onChange={handleChange} required />
        </div>
        <div>
          <label>College:</label>
          <input type="text" name="college" value={formData.college} onChange={handleChange} required />
        </div>
        <div>
          <label>Semester:</label>
          <input type="text" name="semester" value={formData.semester} onChange={handleChange} required />
        </div>
        <div>
          <label>Skills:</label>
          <input type="text" name="skills" value={formData.skills} onChange={handleChange} placeholder="e.g. Java, Python" />
        </div>
        <div style={{ marginTop: '20px' }}>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  )
}

export default App
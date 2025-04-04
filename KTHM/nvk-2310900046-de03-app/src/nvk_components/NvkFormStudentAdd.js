import React, { useState } from 'react';
import axios from 'axios';

function NvkFormStudentAdd() {
  const [student, setStudent] = useState({
    nvkStudName: '',
    nvkStudAge: '',
    nvkStudGender: '',
    nvkEmail: '',
    nvkStudStatus: true
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({
      ...student,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://67ef9fdb2a80b06b8895060e.mockapi.io/nvkApi/2310900046/nvkStudent', student);
      setMessage('Student added successfully!');
      setStudent({
        nvkStudName: '',
        nvkStudAge: '',
        nvkStudGender: '',
        nvkEmail: '',
        nvkStudStatus: true
      });
    } catch (error) {
      setMessage('Error adding student!');
    }
  };

  return (
    <div>
      <h2>Add New Student</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="nvkStudName" value={student.nvkStudName} onChange={handleChange} required />
        </div>
        <div>
          <label>Age:</label>
          <input type="text" name="nvkStudAge" value={student.nvkStudAge} onChange={handleChange} required />
        </div>
        <div>
          <label>Gender:</label>
          <input type="text" name="nvkStudGender" value={student.nvkStudGender} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="nvkEmail" value={student.nvkEmail} onChange={handleChange} required />
        </div>
        <div>
          <label>Status:</label>
          <input type="checkbox" name="nvkStudStatus" checked={student.nvkStudStatus} onChange={(e) => setStudent({ ...student, nvkStudStatus: e.target.checked })} />
        </div>
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default NvkFormStudentAdd;
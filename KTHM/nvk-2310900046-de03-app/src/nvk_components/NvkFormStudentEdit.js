import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function NvkFormStudentEdit() {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await axios.get(`https://67ef9fdb2a80b06b8895060e.mockapi.io/nvkApi/2310900046/nvkStudent/${id}`);
        setStudent(response.data);
      } catch (error) {
        console.error("There was an error fetching the student data!", error);
      }
    };

    fetchStudent();
  }, [id]);

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
      await axios.put(`https://67ef9fdb2a80b06b8895060e.mockapi.io/nvkApi/2310900046/nvkStudent/${id}`, student);
      setMessage('Student updated successfully!');
    } catch (error) {
      setMessage('Error updating student!');
    }
  };

  if (!student) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Edit Student</h2>
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
        <button type="submit">Update Student</button>
      </form>
    </div>
  );
}

export default NvkFormStudentEdit;
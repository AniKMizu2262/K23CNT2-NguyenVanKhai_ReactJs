import React, { useState, useEffect } from 'react';
import axios from 'axios';

function NvkListStudent() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://67ef9fdb2a80b06b8895060e.mockapi.io/nvkApi/2310900046/nvkStudent');
        setStudents(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://67ef9fdb2a80b06b8895060e.mockapi.io/nvkApi/2310900046/nvkStudent/${id}`);
      setStudents(students.filter(student => student.nvkStudId !== id));
    } catch (error) {
      console.error("There was an error deleting the student!", error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading data: {error.message}</p>;
  }

  return (
    <div>
      <h2>Thông tin sinh viên</h2>
      <table className='table table-bordered '>
        <thead>
          <tr>
            <th>Mã sinh viên</th>
            <th>Họ và tên</th>
            <th>Tuổi</th>
            <th>Giới tính</th>
            <th>Email</th>
            <th>Trạng thái</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.nvkStudId}>
              <td>{student.nvkStudId}</td>
              <td>{student.nvkStudName}</td>
              <td>{student.nvkStudAge}</td>
              <td>{student.nvkStudGender}</td>
              <td>{student.nvkEmail}</td>
              <td>{student.nvkStudStatus ? 'Active' : 'Inactive'}</td>
              <td>
                <button onClick={() => handleDelete(student.nvkStudId)}>Delete</button>
                <button onClick={() => window.location.href = `/nvk-student-edit/${student.nvkStudId}`}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default NvkListStudent;
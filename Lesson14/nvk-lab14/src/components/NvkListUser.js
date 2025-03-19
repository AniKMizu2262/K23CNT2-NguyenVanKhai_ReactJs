import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function NvkListUser({ onEditUser }) {
    const [users, setUsers] = useState([]);
    const apiUrl = "https://67d90ec200348dd3e2a93e15.mockapi.io/k23cnt2_nguyenvankhai/nvk_users";

    useEffect(() => {
        axios.get(apiUrl)
            .then((response) => setUsers(response.data))
            .catch((error) => console.error("Lỗi:", error));
    }, []);

    const handleDeleteUser = (userId) => {
        axios.delete(`${apiUrl}/${userId}`)
            .then(() => setUsers(users.filter(user => user.nvkID !== userId)))
            .catch((error) => console.error("Lỗi:", error));
    };

    return (
        <div className='container'>
            <h2>Danh sách người dùng</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Họ và tên</th>
                        <th>Email</th>
                        <th>Số điện thoại</th>
                        <th>Trạng thái</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.nvkID}>
                            <td>{user.nvkID}</td>
                            <td>{user.nvkName}</td>
                            <td>{user.nvkEmail}</td>
                            <td>{user.nvkPhone}</td>
                            <td>{user.nvkActive ? "Hoạt động" : "Khoá"}</td>
                            <td>
                                <button className='btn btn-warning' onClick={() => onEditUser(user.nvkID)}>Sửa</button>
                                <button className='btn btn-danger' onClick={() => handleDeleteUser(user.nvkID)}>Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
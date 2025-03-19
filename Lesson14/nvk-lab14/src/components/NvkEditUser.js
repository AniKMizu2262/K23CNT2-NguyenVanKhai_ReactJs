import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function NvkEditUser({ userId, onUpdate, onCancel }) {
    const [user, setUser] = useState({ nvkName: '', nvkEmail: '', nvkPhone: '', nvkActive: false });
    const apiURL = `https://67d90ec200348dd3e2a93e15.mockapi.io/k23cnt2_nguyenvankhai/nvk_users/${userId}`;

    useEffect(() => {
        axios.get(apiURL)
            .then(response => setUser(response.data))
            .catch(error => console.error('Error fetching user:', error));
    }, [apiURL]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({ ...prevState, [name]: name === 'nvkActive' ? value === 'true' : value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(apiURL, user)
            .then(() => onUpdate())
            .catch(error => console.error('Error updating user:', error));
    };

    return (
        <div className='edit-form-container'>
            <h2>Chỉnh sửa người dùng</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Họ và tên:</label>
                    <input type='text' name='nvkName' value={user.nvkName} onChange={handleChange} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type='email' name='nvkEmail' value={user.nvkEmail} onChange={handleChange} required />
                </div>
                <div>
                    <label>Số điện thoại:</label>
                    <input type='text' name='nvkPhone' value={user.nvkPhone} onChange={handleChange} required />
                </div>
                <div>
                    <label>Trạng thái:</label>
                    <select name='nvkActive' value={user.nvkActive} onChange={handleChange}>
                        <option value='true'>Hoạt động</option>
                        <option value='false'>Khóa</option>
                    </select>
                </div>
                <button type='submit'>Cập nhật</button>
                <button type='button' onClick={onCancel}>Hủy</button>
            </form>
        </div>
    );
}
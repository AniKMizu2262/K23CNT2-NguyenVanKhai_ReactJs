import React, { useState } from 'react';
import axios from 'axios';

export function NvkCreateUser({ onCreate }) {
    const [nvkName, setNvkName] = useState('');
    const [nvkEmail, setNvkEmail] = useState('');
    const [nvkPhone, setNvkPhone] = useState('');
    const [nvkActive, setNvkActive] = useState(false);

    const nvkCreateUserApi = "https://67d90ec200348dd3e2a93e15.mockapi.io/k23cnt2_nguyenvankhai/nvk_users";

    const nvkHandleSubmit = (event) => {
        event.preventDefault();
        let nvkNewUser = { nvkName, nvkEmail, nvkPhone, nvkActive };
        console.log("Dữ liệu gửi lên:", nvkNewUser);
        axios.post(nvkCreateUserApi, nvkNewUser)
            .then(() => onCreate())
            .catch(error => console.error('Error creating user:', error));
    };

    return (
        <div className='form-container'>
            <h2>Thêm mới User</h2>
            <form>
                <div className='form-group'>
                    <label>Họ và tên: <input type='text' name='nvkName' value={nvkName} onChange={(ev) => setNvkName(ev.target.value)} required /></label>
                </div>
                <div className='form-group'>
                    <label>Email: <input type='email' name='nvkEmail' value={nvkEmail} onChange={(ev) => setNvkEmail(ev.target.value)} required /></label>
                </div>
                <div className='form-group'>
                    <label>Số điện thoại: <input type='text' name='nvkPhone' value={nvkPhone} onChange={(ev) => setNvkPhone(ev.target.value)} required /></label>
                </div>
                <div className='form-group'>
                    <label>Hoạt động: 
                        <select name='nnh_active' value={nvkActive} onChange={(ev) => setNvkActive(ev.target.value === 'true')}>
                            <option value='true'>Hoạt động</option>
                            <option value='false'>Khoá</option>
                        </select>
                    </label>
                </div>
                <button type='submit' onClick={nvkHandleSubmit}>Thêm mới</button>
            </form>
        </div>
    );
}
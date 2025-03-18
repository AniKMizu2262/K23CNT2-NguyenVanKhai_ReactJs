import React, { useState } from 'react';
import axios from 'axios';

export default function NvkCreateMockAPI() {
    // Khởi tạo State 
    const [nvkFullName, setNvkFullName] = useState('');
    const [nvkAge, setNvkAge] = useState(0);
    const [nvkActive, setNvkActive] = useState(true);

    // Api post 
    const nvkCreateUserApi = "https://67d90ec200348dd3e2a93e15.mockapi.io/k23cnt2_nguyenvankhai/nvk_users";

    // Khi submit form 
    const nvkHandleSumbit = (event) => {
        event.preventDefault();
        console.log("nvkActive", nvkActive);
        let nvkNewUser = { nvkFullName, nvkAge, nvkActive };
        console.log(nvkNewUser);

        // Ghi dữ liệu vào API 
        axios
            .post(nvkCreateUserApi, nvkNewUser)
            .then((nvk_respone) => {
                console.log('User created successfully:', nvk_respone.data);
            })
            .catch((error) => {
                console.error('There was an error creating the user!', error);
            });
    };

    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-header bg-info text-white">
                    <h2>Thêm mới User</h2>
                </div>
                <div className="card-body">
                    <form onSubmit={nvkHandleSumbit}>
                        <div className="mb-3">
                            <label htmlFor="nvkFullName" className="form-label">FullName:</label>
                            <input type="text" id="nvkFullName" className="form-control" value={nvkFullName} onChange={(ev) => setNvkFullName(ev.target.value)} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="nvkAge" className="form-label">Age:</label>
                            <input type="number" id="nvkAge" className="form-control" value={nvkAge} onChange={(ev) => setNvkAge(parseInt(ev.target.value))} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="nvkActive" className="form-label">Status:</label>
                            <select id="nvkActive" className="form-select" value={nvkActive} onChange={(ev) => setNvkActive(ev.target.value === 'true')}>
                                <option value="true">Hoạt động</option>
                                <option value="false">Khóa</option>
                            </select>
                        </div>

                        <button type="submit" className="btn btn-success">Save</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
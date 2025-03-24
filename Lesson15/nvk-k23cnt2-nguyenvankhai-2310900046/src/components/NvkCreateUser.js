import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react'


export default function NvkCreateUser() {
    const nvkUser = {
        id: 0,
        'nvk_name': '',
        'nvk_email': '',
        'nvk_phone': '',
        'nvk_active': '' 
    }

    const [nvk_user, setNvk_User] = useState(nvkUser);
    const nvkApi = "https://67e0d03e58cc6bf78522fb40.mockapi.io/nvk-k23cnt2-2310900046/nvk_users";
    const navigate = useNavigate();

    const nvkHandleSumbit = (ev) => {
        ev.preventDefault();
        console.log(nvk_user);
        axios
            .post(nvkApi, nvk_user)
            .then(() => {
                navigate('/nvk-list-user'); 
            })
            .catch((error) => console.error('Error:', error));
    }

    return (
        <div>
            <h2>Thêm mới User</h2>
            <form>
                <div className="mb-3 row">
                    <label htmlFor="nvk_name" className="col-sm-2 col-form-label">FullName :</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="nvk_name"
                            name='nvk_name'
                            value={nvk_user.nvk_name}
                            onChange={(ev) => setNvk_User({ ...nvk_user, nvk_name: ev.target.value })}
                        />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="nvk_email" className="col-sm-2 col-form-label">Email :</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="nvk_email"
                            name='nvk_email'
                            value={nvk_user.nvk_email}
                            onChange={(ev) => setNvk_User({ ...nvk_user, nvk_email: ev.target.value })}
                        />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="nvk_phone" className="col-sm-2 col-form-label">Phone :</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="nvk_phone"
                            name='nvk_phone'
                            value={nvk_user.nvk_phone}
                            onChange={(ev) => setNvk_User({ ...nvk_user, nvk_phone: ev.target.value })}
                        />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="nvk_active" className="col-sm-2 col-form-label">Status :</label>
                    <div className="col-sm-10">
                        <select
                            id="nvk_active"
                            className="form-control"
                            value={nvk_user.nvk_active}
                            onChange={(ev) => setNvk_User({ ...nvk_user, nvk_active: ev.target.value })}
                        >
                            <option value="">-- Select Status --</option>
                            <option value="true">Hoạt động</option>
                            <option value="false">Tạm khóa</option>
                        </select>
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="" className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-10">
                        <button className='btn btn-info mx-2 px-3' name='btnNvkCreate' onClick={nvkHandleSumbit}>Create</button>
                        <button className='btn btn-primary mx-2 px-3' name='btnNvkBack' onClick={() => navigate('/nvk-list-user')}>Back</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

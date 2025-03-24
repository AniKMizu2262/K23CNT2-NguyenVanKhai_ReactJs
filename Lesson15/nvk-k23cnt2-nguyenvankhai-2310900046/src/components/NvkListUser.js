import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function NvkListUser() {
    // State 
    const [NvkListUser, setNvkListUser] = useState([])
    const nvkApi = "https://67e0d03e58cc6bf78522fb40.mockapi.io/nvk-k23cnt2-2310900046/nvk_users"


    useEffect(() => {
        axios.get(nvkApi)
            .then(nvkResponse => {
                // Xử lí dữ liệu trả về từ API
                console.log(nvkResponse.data); // Data từ API
                setNvkListUser(nvkResponse.data)
            })
            .catch(error => {
                // Xử lí lỗi 
                console.error('Lỗi : ', error);
            });
    }, [])

    const nvkHandleDelete = async (nvkId) =>{
        if(window.confirm('Xóa User trên ?')){
            await axios.delete(nvkApi+"/"+nvkId)

            let nvkListUserDelete = NvkListUser.filter(x => x.id !== nvkId);
            setNvkListUser(nvkListUserDelete);
        }
    }

    const navigate =useNavigate();
    const nvkHandleUpdate = (nvkId) => {
        navigate(`/nvk-edit-user/${nvkId}`);
    }
    

    return (
        <div>
            <h2>Danh sách User </h2>
            <table className='table table-info table-bordered'>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>FullName</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Active</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        NvkListUser.map((nvkUserItem)=>{
                            return (
                                <tr>
                                    <td>{nvkUserItem.id}</td>
                                    <td>{nvkUserItem.nvk_name}</td>
                                    <td>{nvkUserItem.nvk_email}</td>
                                    <td>{nvkUserItem.nvk_phone}</td>
                                    <td>
                                        {nvkUserItem.nvk_active? 
                                        <span className='badge text-bg-success'>Hoạt dộng</span>:
                                        <span className='badge text-bg-danger'>Tạm khóa</span>}
                                    </td>
                                    <td>
                                        <button className="btn btn-warning mx-2"onClick={()=>nvkHandleUpdate(nvkUserItem.id)}>Edit</button>
                                        <button className="btn btn-danger" onClick={() => nvkHandleDelete(nvkUserItem.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

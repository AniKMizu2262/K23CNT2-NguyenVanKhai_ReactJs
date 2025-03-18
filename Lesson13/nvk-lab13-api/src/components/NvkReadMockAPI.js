import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function NvkReadMockAPI() {
    // Khởi tạo State 
    const [nvkListUser, setNvkListUser] = useState([])
    // API
    const nvkApiOnline = "https://67d90ec200348dd3e2a93e15.mockapi.io/k23cnt2_nguyenvankhai/nvk_users"
    // Đọc dữ liệu từ API = axios
    useEffect(() => {
        axios
            .get(nvkApiOnline)
            .then((nvk_response) => {
                setNvkListUser(nvk_response.data)
            })
            .catch((error) => {
                console.error("Lỗi phát sinh !", error)
            })
    }, [])
    
    // View data 
    const nvkElementUser = nvkListUser.map((nvk_item, index) => {
        return (
            <tr key={index}>
                <td>{nvk_item.nvkId}</td>
                <td>{nvk_item.nvkFullName}</td>
                <td>{nvk_item.nvkAge}</td>
                <td>{nvk_item.nvkActive?'Hoạt động':'Khóa'}</td>
                <td>
                    <button className='btn btn-warning mx-2'>Sửa</button>
                    <button className='btn btn-danger'>Xóa</button>
                </td>
            </tr>
        ) 
    })
  return (
    <div className='alret alert-danger'>
        <h2>Danh sách </h2>
        <table className='table table-bordered'>
        <thead>
            <tr>
                <th>ID</th>
                <th>FullName</th>
                <th>Age</th>
                <th>Active</th>
                <th>Chức năng</th>
            </tr>
        </thead>
        <tbody>
            {
                nvkElementUser
            }
        </tbody>
      </table>
    </div>
  )
}

import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function NvkReadApiLocal() {
    // Khởi tạo state 
    const [nvkListUser, setNvkListUser] = useState([])
    // Đọc dữ liệu từ API Local và set cho nvkListUser
    const apiUrl ="http://localhost:3001/users"
    // Lấy danh sách từ apiUrl
    useEffect(()  =>{
        axios
            .get(apiUrl)
            .then((nvkResponse) => {
            setNvkListUser(nvkResponse.data)
        })
        .catch(() => {
            console.log("Lỗi")
    }) 
    }, []) 

  return (
    <div>
      <h2>Đọc dữ liệu từ API Local </h2> 
      <table className='table table-bordered'>
        <thead>
            <tr>
                <th>FullName</th>
                <th>Age</th>
            </tr>
        </thead>
        <tbody>
            {
                nvkListUser.map((nvkUser, index) => {
                    return (
                        <tr key={index}>
                            <td>{nvkUser.fullname}</td>
                            <td>{nvkUser.age}</td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  )
}

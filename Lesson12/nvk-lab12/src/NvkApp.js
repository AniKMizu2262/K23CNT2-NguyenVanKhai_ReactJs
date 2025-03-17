import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NvkNavNar from './components/NvkNavNar'
import NvkHome from './components/NvkHome'
import NvkAbout from './components/NvkAbout'
import NvkContact from './components/NvkContact'
import NvkListUser from './components/NvkListUser'
import NvkFormUser from './components/NvkFormUser'
export default function NvkApp() {

  const listUser = [
    {ID: "SV001", nvkFullName: "Nguyễn Văn Khải", nvkUserName: "khai", nvkPass: "123456"}, 
    {ID: "SV002", nvkFullName: "Nguyễn Văn A", nvkUserName: "a", nvkPass: "123456"},
    {ID: "SV003", nvkFullName: "Nguyễn Văn B", nvkUserName: "b", nvkPass: "123456"},
  ]

  const [nvkUser, setnvkUser] = useState(listUser)

  // Hàm xử lý sự kiện thêm mới 
  const nvkHandleAdd = (nvkParam) =>{
    console.log("nvkHandleAdd : ", nvkParam)

    setnvkUser(prev =>{
      return [...prev, nvkParam]
    })
  }
  return (
    <div className='container border my-3'>
      <h1>React Router Dom - Demo - [Nguyễn Văn Khải - K23CNT2] </h1>
      <hr />
      <Router>
        <NvkNavNar />
        <Routes>
          <Route path='/' element={<NvkHome />} />
          <Route path='/about' element={<NvkAbout />} />
          <Route path='/contact' element={<NvkContact />} />
          <Route path='/list-user' element={<NvkListUser renderNvkUsers={nvkUser} />} />
          <Route path='/create-user' element={<NvkFormUser onnvkAddNew={nvkHandleAdd}/>} />
        </Routes>
      </Router  >
    </div>
  )
}

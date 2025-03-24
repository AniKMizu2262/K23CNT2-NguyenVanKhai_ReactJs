import React from 'react'
import { BrowserRouter as NvkRouter, Route, Routes } from 'react-router-dom'
import NvkNavBar from './components/NvkNavBar'
import NvkHome from './components/NvkHome'
import NvkListUser from './components/NvkListUser'
import NvkCreateUser from './components/NvkCreateUser'
import NvkEditUser from './components/NvkEditUser'

export default function NvkApp() {
  return (
    <div className='container border my-3 p-3'>
      <h1 className='alert alert-danger text-center'>K23CNT2 - Nguyễn Văn Khải - 2310900046</h1>
      <hr />
      <NvkRouter>
        <NvkNavBar />
        <hr />
        <Routes>
          <Route path='/' element={<NvkHome />} />
          <Route path='/nvk-list-user' element={<NvkListUser />} />
          <Route path='/nvk-create-user' element={<NvkCreateUser />} />
          <Route path='/nvk-edit-user/:id' element={<NvkEditUser />} />
        </Routes>
      </NvkRouter>
    </div>
  )
}

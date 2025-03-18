import React from 'react'
import NvkReadApiLocal from './components/NvkReadApiLocal'
import NvkReadMockAPI from './components/NvkReadMockAPI'
import NvkCreateMockAPI from './components/NvkCreateMockAPI'

export default function NvkApp() {
  return (
    <div className='container border my-3 p-3'>
        <h1>ReactJS - API - Nguyễn Văn Khải </h1>
        <hr />
        <NvkReadApiLocal />
        <hr />
        <h2>Đọc dữ liệu từ mockApi (mockapi.io)</h2>
        <NvkReadMockAPI />

        <NvkCreateMockAPI />
    </div>
  )
}

import React from 'react';

export default function NvkNavBar({ setSelectedUser }) {
  return (
    <div>
      <nav>
        <button className='btn btn-light' onClick={() => setSelectedUser(null)}>Trang chủ</button>
        <button className='btn btn-info' onClick={() => setSelectedUser('list')}>Danh sách User</button>
        <button className='btn btn-primary' onClick={() => setSelectedUser('create')}>Thêm mới User</button>
      </nav>
    </div>
  );
}
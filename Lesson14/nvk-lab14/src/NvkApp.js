import React, { useState } from 'react';
import NvkHome from './components/NvkHome';
import NvkListUser from './components/NvkListUser';
import { NvkCreateUser } from './components/NvkCreateUser';
import { NvkEditUser } from './components/NvkEditUser';
import NvkNavBar from './components/NvkNavBar';
import './style.css';

function NvkApp() {
    const [selectedUser, setSelectedUser] = useState(null);
    const [editingUserId, setEditingUserId] = useState(null);

    const handleEditUser = (userId) => {
        setEditingUserId(userId);
        setSelectedUser('edit');
    };

    const handleCancelEdit = () => {
        setEditingUserId(null);
        setSelectedUser('list');
    };

    return (
        <div className='container border my-3 p-3'>
            <h1>Mini Project - Nguyễn Văn Khải  - K23CNT2</h1>
            <NvkNavBar setSelectedUser={setSelectedUser} />
            <hr />
            {selectedUser === null && <NvkHome />}
            {selectedUser === 'list' && <NvkListUser onEditUser={handleEditUser} />}
            {selectedUser === 'create' && <NvkCreateUser onCreate={() => setSelectedUser('list')} />}
            {selectedUser === 'edit' && <NvkEditUser userId={editingUserId} onUpdate={() => setSelectedUser('list')} onCancel={handleCancelEdit} />}
        </div>
    );
}

export default NvkApp;
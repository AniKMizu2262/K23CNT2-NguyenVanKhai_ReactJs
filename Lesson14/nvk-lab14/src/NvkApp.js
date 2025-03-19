import React, { useState } from 'react';
import NvkHome from './components/NvkHome';
import NvkListUser from './components/NvkListUser';
import { NvkCreateUser } from './components/NvkCreateUser';
import NvkNavBar from './components/NvkNavBar';
import './style.css';

function NvkApp() {
    const [selectedUser, setSelectedUser] = useState(null);

    return (
        <div className='container border my-3 p-3'>
            <h1>Mini Project - Nguyễn Văn Khải  - K23CNT2</h1>
            <NvkNavBar setSelectedUser={setSelectedUser} />
            <hr />
            {selectedUser === null && <NvkHome />}
            {selectedUser === 'list' && <NvkListUser />}
            {selectedUser === 'create' && <NvkCreateUser onCreate={() => setSelectedUser('list')} />}
        </div>
    );
}

export default NvkApp;
import React from 'react'
import { Link } from 'react-router-dom'
export default function NvkNavNar() {
    return (
        <div>
            <ul>
                <Link to='/'>Trang chủ</Link>
                <Link to='/about'>Giới thiệu</Link>
                <Link to='/contact'>Liên hệ</Link>
                <Link to='/list-user'>User </Link>
                <Link to='/create-user'>Create User </Link>
            </ul>
        </div>
    )
}

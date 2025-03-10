import React, { useState, useEffect } from 'react'

export default function NvkPostList() {
    const [posts, setPosts] = useState([]); // State lưu danh sách bài viết

    useEffect(() => {
        // Gọi API để lấy danh sách bài viết
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json()) // Chuyển đổi dữ liệu thành JSON
            .then((data) => setPosts(data)); // Cập nhật state
    }, []); // [] để chỉ gọi API 1 lần khi component mount

    return (
        <div>
            <h2>Danh sách bài viết</h2>
            <ul>
                {posts.slice(0, 10).map((post) => (
                    <li key={post.id}>{post.title}</li> // Hiển thị 10 bài viết đầu tiên
                ))}
            </ul>
        </div>
    );
}
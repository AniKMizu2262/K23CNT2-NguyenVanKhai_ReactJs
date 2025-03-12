import React, { useState } from "react";

export default function NvkMemberAdd({ onAddMember }) {
    const [newMember, setNewMember] = useState({
        nvkID: "",
        nvkFullname: "",
        nvkUsername: "",
        nvkPassword: ""
    });

    const handleChange = (e) => {
        setNewMember({ ...newMember, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newMember.nvkID && newMember.nvkFullname && newMember.nvkUsername && newMember.nvkPassword) {
            onAddMember(newMember);
            setNewMember({ nvkID: "", nvkFullname: "", nvkUsername: "", nvkPassword: "" });
        } else {
            alert("Vui lòng nhập đầy đủ thông tin!");
        }
    };

    return (
        <div className="form-container">
            <h2>Thêm thành viên mới</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="nvkID" placeholder="ID" value={newMember.nvkID} onChange={handleChange} required />
                <input type="text" name="nvkFullname" placeholder="Họ và Tên" value={newMember.nvkFullname} onChange={handleChange} required />
                <input type="text" name="nvkUsername" placeholder="Username" value={newMember.nvkUsername} onChange={handleChange} required />
                <input type="password" name="nvkPassword" placeholder="Password" value={newMember.nvkPassword} onChange={handleChange} required />
                <button type="submit">Thêm mới</button>
            </form>
            
        </div>
    );
}

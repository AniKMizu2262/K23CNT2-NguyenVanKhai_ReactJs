import React from "react";

export default function MemberList({ members }) {
    return (
        <div>
            <h2>Danh sách thành viên</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Họ và Tên</th>
                        <th>Username</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {members.map((member, index) => (
                        <tr key={index}>
                            <td>{member.nvkID}</td>
                            <td>{member.nvkFullname}</td>
                            <td>{member.nvkUsername}</td>
                            <td>{member.nvkPassword}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

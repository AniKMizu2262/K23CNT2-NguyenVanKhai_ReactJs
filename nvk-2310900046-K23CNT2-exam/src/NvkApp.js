import React, { useState } from "react";
import NvkMemberList from "./components/NvkMemberList";
import NvkMemberAdd from "./components/NvkMemberAdd";

const NvkApp = () => {
    const [members, setMembers] = useState([
        { nvkID: "SV001", nvkFullname: "Nguyễn Văn A", nvkUsername: "nguyenvana", nvkPassword: "123456" },
        { nvkID: "SV002", nvkFullname: "Trần Thị B", nvkUsername: "tranthib", nvkPassword: "abcdef" },
        { nvkID: "SV003", nvkFullname: "Lê Văn C", nvkUsername: "levanc", nvkPassword: "qwerty" },
    ]);

    // Hàm thêm thành viên mới
    const addMember = (newMember) => {
        setMembers([...members, newMember]);
    };

    return (
        <div>
            <h1>Danh sách thành viên</h1>
            <NvkMemberAdd onAddMember={addMember} />
            <NvkMemberList members={members} />
        </div>
    );
};

export default NvkApp;

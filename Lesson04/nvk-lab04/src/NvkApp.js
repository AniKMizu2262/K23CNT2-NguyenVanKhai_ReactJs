import React from 'react';
import NvkFunComp from './components/nvkFunComp';
import NvkFuncComp1 from './components/nvkFuncComp1';
import NvkClassComp from './components/nvkClassComp';

function NvkApp() {
  // object
  const user = {
    fullname: "Nguyễn Văn Khải",
    age: 20,
    phone: "0347903565"
  };

  return (
    <div className="container border border-primary p-3">
      <h1>Demo Component - Props - State</h1>
      <hr />
      <div className="alert alert-primary">
        <NvkFunComp name="Nguyễn Văn Khải" address="Đông Anh" company="Đại học Nguyễn Trãi" />
        <hr />
        <NvkFunComp name="Nguyễn Văn A" address="Hà Nội" company="Đại học Hà Nội" />
      </div>
      <div className="alert alert-success">
        <NvkFuncComp1 renderInfo={user} />
      </div>
      {/* Chuyển dữ liệu từ NvkApp -> xuống nvkClassComp */}
      <NvkClassComp renderName="K23CNT2" renderUsers = {user} />
      <hr />
    </div>
  );
}

export default NvkApp;
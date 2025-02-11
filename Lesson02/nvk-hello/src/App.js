import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="personal-info">
          <h1>Thông tin cá nhân</h1>
          <p>Họ và tên: Nguyễn Văn Khải</p>
          <p>Mã sinh viên: 2310900046</p>
          <p>Ngày sinh: 10/07/2005</p>
          <p>Điện thoại: 0347903565</p>
          <p>Tên lớp: K23CNT2</p>
        </div>
      </header>
    </div>
  );
}

export default App;
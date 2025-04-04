import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NvkNavBar from './nvk_components/NvkNavBar';
import NvkHome from './nvk_components/NvkHome';
import NvkListStudent from './nvk_components/NvkListStudent';
import NvkFormStudentAdd from './nvk_components/NvkFormStudentAdd';
import NvkFormStudentEdit from './nvk_components/NvkFormStudentEdit';

function NvkApp() {
  return (
    <Router>
      <div className="NvkApp">
        <NvkNavBar />
        <header className="NvkApp-header">
          <h1>Bài thi cuối học phần – Nguyễn Văn Khải : 2310900046</h1>
        </header>
        <Routes>
          <Route path="/" element={<NvkHome />} />
          <Route path="/nvk-student" element={<NvkListStudent />} />
          <Route path="/nvk-student-add" element={<NvkFormStudentAdd />} />
          <Route path="/nvk-student-edit/:id" element={<NvkFormStudentEdit />} />
        </Routes>
      </div>
    </Router>
  );
}

export default NvkApp;
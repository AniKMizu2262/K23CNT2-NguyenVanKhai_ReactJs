import React from 'react';
import NvkJsxExpression from './components/nvkJsxExpression';
import NvkFunComp from './components/nvkFunComp';
import NvkClassComp from './components/nvkClassComp';

function NvkApp() {
  return (
    <div className="container border mt-3 bg-white">
      <h1>React JS Lesson 03 - Nguyễn Văn Khải</h1>
      <NvkJsxExpression />

      <hr />
      {/* <Use components /> */}
      <NvkFunComp />
      <hr />
      {/* <Use class components /> */}
      <NvkClassComp />
    </div>
  );
}

export default NvkApp;
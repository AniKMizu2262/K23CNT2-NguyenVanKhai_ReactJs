import React from 'react';
import NvkCounter from './components/NvkCounter';
import NvkPostList from './components/NvkPostList';

function App() {
  return (
    <><div>
      <h1>Ứng dụng bộ đếm</h1>
      <NvkCounter />
    </div><hr /><div>
        <h1>Danh sách bài viết</h1>
        <NvkPostList />
      </div></>
  );
}

export default App;

import React from 'react';

export default function NvkFunComp(props) {
  return (
    <div>
      <h2>Demo : Function Component Props</h2>
      <p>Lấy dữ liệu từ props để hiển thị</p>
      <p>Tên : {props.name}</p>
      <p>Địa chỉ : {props.address}</p>
      <p>Trường : {props.company}</p>
      <p>Ghi chú : {props.note}</p>
    </div>
  );
}
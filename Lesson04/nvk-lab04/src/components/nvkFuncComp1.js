import React from 'react';

export default function NvkFuncComp1(props) {
  return (
    <div>
      <h2>Prop is Object</h2>
      <p><b>Info:</b></p>
      <p>Full Name: {props.renderInfo.fullname}</p>
    </div>
  );
}
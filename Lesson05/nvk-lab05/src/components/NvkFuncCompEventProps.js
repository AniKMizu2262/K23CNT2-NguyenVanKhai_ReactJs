import React from 'react'

export default function NvkFuncCompEventProps(nvkProps) {
    // Hàm xử lí sự kiện
    const nvkHandleButtonClick1 = () => {
        alert("Data từ Props = " + nvkProps.nvkRenderName);
        console.log("Xin chào Admin :  " + nvkProps.nvkRenderName);
    }

    const nvkHandleButtonClick2 = (param) =>{
        // Lấy dữ liệu từ Props 
        alert("Data từ Props (Button 2 click) = " + nvkProps.nvkRenderName);
        // Dữ liệu từ biến từ tham số 
        console.log('========================');
        console.log("Xin chào," + param);
        console.log('========================');
    }
  return (
    <div className='alert alert-info'>
      <button className='btn btn-primary mx-1'onClick={nvkHandleButtonClick1}> Button 1 </button>
      <button className='btn btn-success mx-1'onClick={()=>nvkHandleButtonClick2("Button 2")}> Button 2 </button>
    </div>
  )
}

import React, { Component } from 'react'
import NvkEventForm1 from './components/NvkEventForm1';
import NvkEventForm2 from './components/NvkEventForm2';
import NvkEventForm3 from './components/NvkEventForm3';
import NvkEventForm4 from './components/NvkEventForm4';
import NvkEventForm5 from './components/NvkEventForm5';

 class NvkApp extends Component {


  // Hàm xử lý nhận dữ liệu từ form student
  nvkHandleSubmitForm = (param)=>{
    console.log("Student:",param);
  }

  render() {
    return (
      <div className='container border my-3 bg-white'>
        <h1 className='text-center'>Event Form - Demo </h1>
        <hr/>
        <NvkEventForm1 />
        <NvkEventForm2 />
        <NvkEventForm3 />
        <NvkEventForm4 />
        <NvkEventForm5 onnvkHandleSubmit={this.nvkHandleSubmitForm}/>
      </div>
    )
  }
}

export default NvkApp;
import React, { Component } from 'react'
import NvkFuncCompEvent1 from './components/NvkFuncCompEvent1';
import NvkClassCompEvent1 from './components/NvkClassCompEvent1';
import NvkFuncCompEventProps from './components/NvkFuncCompEventProps';
import NvkClassCompEventProps from './components/NvkClassCompEventProps';
import NvkClassCompEventState from './components/NvkClassCompEventState';
import NvkClassCompEventPostData from './components/NvkClassCompEventPostData';

class NvkApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            nvkNoiDung : "Chưa có gì",
        }
    }
    // Hàm xử lý sự kiện khi Components con gửi dữ liệu lên App
    nvkHandleDataToApp = (content)=>{
        alert(content);
        this.setState({
            nvkNoiDung : content,
        })
    }
  render() {
    return (
      <div className='container border mt-3'>
        <h1 className='text-center alert alert-info my-2'>K23CNT2 - Nguyễn Văn Khải - Event and Form</h1>
        <hr />
        <div>
            <h2>Function Component - Event</h2>
            <NvkFuncCompEvent1 />
        </div>
        <hr />
        <div>
             <h2>Class Component - Event</h2>
             <NvkClassCompEvent1 />
        </div>
        <hr />
        <div>
             <h2>Function Component - Event, props</h2>
             <NvkFuncCompEventProps nvkRenderName="Nguyễn Văn Khải" />  
        </div>
        <hr />
        <div>
             <h2>Class Component - Event, props</h2>
             <NvkClassCompEventProps nvkRenderTitle = "Welcome to Admin !"/>
        </div>
        <hr />
        <div>
             <h2>Class Component - Event, state</h2>
             <NvkClassCompEventState />
        </div>
        <hr />
        <div>
             <h1>{this.state.nvkNoiDung}</h1>
             <h2>Class Component - Event, Post data to App </h2>
             <NvkClassCompEventPostData onNvkDataToApp={this.nvkHandleDataToApp} /> 
        </div>
        <hr />
      </div>
    )
  }
}

export default NvkApp;
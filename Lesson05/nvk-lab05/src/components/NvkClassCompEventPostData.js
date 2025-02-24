import React, { Component } from 'react'

class NvkClassCompEventPostData extends Component {

    // Hàm xử lí sự kiện
    nvkEventHandleClick = ()=>{
        // Chuyển dữ liệu lên App thông qua Props 
        this.props.onNvkDataToApp("Dữ liệu từ Components con - NvkClassCompEventPostData");
    } 
    render() {
        return (
            <div className='alert alert-success'>
                <button className='btn btn-primary'onClick={this.nvkEventHandleClick}>Button 1 - Chuyển Data lên App </button>
            </div>
        )
    }
}

export default NvkClassCompEventPostData;

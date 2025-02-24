import React, { Component } from 'react'

class NvkClassCompEventState extends Component {
    constructor(props){
        super(props);
        this.state = {
            nvkFullName : "Nguyễn Văn Khải ",
            nvkAge : 20,
        }
    }

    // Hàm xử lí sự kiện
    nvkEventHandleClick1 = () => {
        // Lấy dữ liệu từ State
        alert("FullName : " + this.state.nvkFullName + "\n  Age : " + this.state.nvkAge);
    }
    render() {
        return (
            <div className='alert alert-danger'>
                <button className='btn btn-primary mx-1'onClick={this.nvkEventHandleClick1}>Button 1 - Data trong State </button>
            </div>
        )
    }
}

export default NvkClassCompEventState;

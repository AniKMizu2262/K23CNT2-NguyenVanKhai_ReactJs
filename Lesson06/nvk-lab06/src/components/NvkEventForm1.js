import React, { Component } from 'react'

class NvkEventForm1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nvkStudentName: 'Nguyễn Văn Khải',
        }
    }
    // Hàm xử lý sự kiện khi Data trên Textbox nvkStudentName thay đổi
    nvkHandleChange = (event) => {
        // Cập nhật lại State 
        this.setState({
            nvkStudentName: event.target.value
        })
    }
    // Khi Sumbit Form, lấy Data hiển thị 
    nvkHandleSubmit = (ev) => {
        alert('Xin chào : ' + this.state.nvkStudentName);
        ev.preventDefault();
    }
    render() {
        return (
            <div className='alert alert-info'>
                <h2>Form Input</h2>
                <form onSubmit={this.nvkHandleSubmit}>
                    <label htmlFor='nvkStudentName'>
                        <input type='text' id='nvkStudentName' name='nvkStudentName' 
                            value={this.state.nvkStudentName} 
                            onChange={this.nvkHandleChange} 
                        />
                    </label>
                    <button className='btn btn-primary mx-1'>Click here</button>
                </form>
            </div>
        )
    }
}

export default NvkEventForm1;
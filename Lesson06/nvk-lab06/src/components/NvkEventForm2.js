import React, { Component } from 'react';

class NvkEventForm2 extends Component {
    constructor(props){
        super(props);
        this.state={
            nvkCourse: 'CSS3',
        }
    }
    // Hàm xử lý sự kiện khi thay đồi khóa học
    nvkHandleChange = (event)=>{
        // Cập nhật lại state
        this.setState({
            nvkCourse:event.target.value,
        })
    }

    // Hàm xử lý sự kiện khi submit form
    nvkHandleSubmit = (event)=>{
        alert("Khóa học bạn chọn:" + this.state.nvkCourse);
        event.preventDefault();
    }
    render() {
        return (
            <div className='alert alert-danger'>
                 <h2>Form Select</h2>
                <form  >
                    <label htmlFor=''>
                      <select name='nvkCourse' id='nvkCourse' 
                            value={this.state.nvkCourse}
                            onChange={this.nvkHandleChange} >
                        <option value={'HTML5'}>HTML5</option>
                        <option value={'CSS3'}>CSS3</option>
                        <option value={'Javascript'}>Javascript</option>
                        <option value={'Jquery'}>Jquery</option>
                        <option value={'Bootstrap'}>Bootstrap</option>
                      </select>
                    </label>
                    <button className='btn btn-primary mx-1' onClick={this.nvkHandleSubmit}>Click here</button>
                </form>
            </div>
        );
    }
}

export default NvkEventForm2;
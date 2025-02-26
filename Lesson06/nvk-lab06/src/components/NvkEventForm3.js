import React, { Component } from 'react';

class NvkEventForm3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            nvkGioiTinh:'Nam',
        }
    }

    // Hàm xử lý sự kiện change
    nvkHandleChange = (event)=>{
        this.setState({
            nvkGioiTinh:event.target.value,
        })
    }

    // Hàm xử lý sự kiện submit form
    nvkHandleSubmit = (event)=>{
        event.preventDefault();
        alert("Giới tính của bạn là: " + this.state.nvkGioiTinh)
    }
    render() {
        return (
            <div className='alert alert-success'>
                <h2> Form input - radio</h2>
                <form>
                    <div>
                        <label htmlFor=''>Giới tính:</label> 
                        <input type='radio' name='nvkGioiTinh'  id='nvkNam' className='mx-2' value="Nam" checked={this.state.nvkGioiTinh === 'Nam'} onChange={this.nvkHandleChange}/> 
                            <label htmlFor='nvkNam'>Nam</label>  
                        <input type='radio' name='nvkGioiTinh'  id='nvkNu' className='mx-2' value="Nữ" checked={this.state.nvkGioiTinh === 'Nữ'} onChange={this.nvkHandleChange}/> 
                            <label htmlFor='nvkNu'>Nữ</label>  
                        <input type='radio' name='nvkGioiTinh' id='nvkKhac' className='mx-2' value="Khác" checked={this.state.nvkGioiTinh === 'Khác'} onChange={this.nvkHandleChange}/> 
                            <label htmlFor='nvkKhac'>Khác</label>
                    </div>
                    <button onClick={this.nvkHandleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default NvkEventForm3;
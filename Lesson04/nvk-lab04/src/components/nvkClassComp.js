import React, { Component } from 'react';

export default class NvkClassComp extends Component {
  constructor(props) {
    super(props);
    // Khởi tạo state 
    this.state = {
      fullname: "Nguyễn Văn Khải",
      age: 20,
      phone: "0347903565"
    };
  }
  // Hàm xử lí sự kiện 
  changeInfo = (ev) => {
    //Cập nhật state 
    this.setState({
      fullname: "Nguyễn Văn A",
      age: 25,
      phone: "0123456789"
    });
  }
  render() {
    return (
      <div className='alert alert-success'>
        <h2>Trình bày dữ liệu từ state</h2>
        <p>info state: {this.state.fullname}</p>
        <p>info state: {this.state.age}</p>
        <p>info state: {this.state.phone}</p>

        <hr />
        <button className='btn btn-primary'onClick={this.changeInfo}>Change Info </button>
        <hr />
        <h3>Lấy dữ liệu từ props </h3>
        <p>Name : {this.props.renderName}</p> 
        <p>Full Name : {this.props.renderUsers.fullname}</p>
        <p>Age : {this.props.renderUsers.age}</p>
        <p>Phone : {this.props.renderUsers.phone}</p>   
      </div>
      
    );
  }
}
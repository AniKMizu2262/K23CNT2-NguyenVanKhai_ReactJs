import React, { Component } from 'react'
import NvkControl from './components/NvkControl'
import NvkStudentList from './components/NvkStudentList'
import NvkForm from './components/NvkForm'

export default class NvkApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nvkStudents: [
        { nvkID: 'SV001', nvkName: 'Nguyễn Văn A', nvkAge: 20, nvkGender: 'Nam', nvkBirthday: '01/01/2000', nvkBirthPlace: 'Hà Nội', nvkAddress: '323 Kim Ma' },
        { nvkID: 'SV002', nvkName: 'Nguyễn Văn B', nvkAge: 21, nvkGender: 'Nam', nvkBirthday: '02/02/2000', nvkBirthPlace: 'Hà Nội', nvkAddress: '323 Kim Ma' },
        { nvkID: 'SV003', nvkName: 'Nguyễn Văn C', nvkAge: 22, nvkGender: 'Nam', nvkBirthday: '03/03/2000', nvkBirthPlace: 'Hà Nội', nvkAddress: '323 Kim Ma' },
        { nvkID: 'SV004', nvkName: 'Nguyễn Văn D', nvkAge: 23, nvkGender: 'Nam', nvkBirthday: '04/04/2000', nvkBirthPlace: 'Hà Nội', nvkAddress: '323 Kim Ma' },
      ],
      nvkStudent: {},
      isEdit: false, // Biến để kiểm tra trạng thái sửa
    }
  }

  // Hàm xử lí sự kiện xem thông tin sinh viên
  nvkHandleView = (nvkStudent) => {
    this.setState({
      nvkStudent: nvkStudent,
      isEdit: false,
    })
  }

  // Hàm xử lí sự kiện xóa sinh viên
  nvkHandleDelete = (nvkID) => {
    this.setState({
      nvkStudents: this.state.nvkStudents.filter(student => student.nvkID !== nvkID)
    })
  }

  // Hàm xử lí sự kiện thêm mới sinh viên
  nvkHandleAdd = (newStudent) => {
    this.setState({
      nvkStudents: [...this.state.nvkStudents, newStudent]
    })
  }

  // Hàm xử lí sự kiện sửa sinh viên
  nvkHandleEdit = (editedStudent) => {
    this.setState({
      nvkStudents: this.state.nvkStudents.map(student => student.nvkID === editedStudent.nvkID ? editedStudent : student),
      isEdit: false,
      nvkStudent: {},
    })
  }

  // Hàm xử lí chuyển sang chế độ sửa
  nvkHandleEditMode = (nvkStudent) => {
    this.setState({
      nvkStudent: nvkStudent,
      isEdit: true,
    })
  }

  render() {
    // Log
    console.log("View Student : ", this.state.nvkStudent);
    return (
      <div>
        <h1 className='text-center'>Nguyễn Văn Khải - K23CNT2 - Mini Project 01 </h1>
        <div className="row">
          <div className="col-lg-7 grid-margin stretch-card">
            <div className="card">

              {/*header */}
              <NvkControl onNvkHandleAdd={this.nvkHandleAdd} />
              {/*Danh sách SV */}
              <NvkStudentList 
                renderNvkStudents={this.state.nvkStudents} 
                onNvkHandleView={this.nvkHandleView} 
                onNvkHandleDelete={this.nvkHandleDelete} 
                onNvkHandleEditMode={this.nvkHandleEditMode}
              />
            </div>
          </div>
          <div className="col-5 grid-margin">
            {/*Form */}
            <NvkForm 
              renderNvkStudent={this.state.nvkStudent} 
              isEdit={this.state.isEdit} 
              onNvkHandleAdd={this.nvkHandleAdd} 
              onNvkHandleEdit={this.nvkHandleEdit} 
            />
          </div>
        </div>
      </div>
    )
  }
}
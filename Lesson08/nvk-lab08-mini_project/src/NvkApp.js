import React, { Component } from 'react'
import NvkControl from './components/NvkControl'
import NvkStudentList from './components/NvkStudentList'
import NvkForm from './components/NvkForm'
// import NvkStudent from './components/NvkStudent'

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
    }
  }

  // Hàm xử lí sự kiện xem thông tin sinh viên
  nvkHandleView = (nvkStudent) => {
    this.setState({
      nvkStudent: nvkStudent,
    })
  }

  // Hàm xử lí sự kiện xóa sinh viên
  nvkHandleDelete = (nvkID) => {
    this.setState({
      nvkStudents: this.state.nvkStudents.filter(student => student.nvkID !== nvkID)
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
              <NvkControl />
              {/*Danh sách SV */}
              <NvkStudentList 
                renderNvkStudents={this.state.nvkStudents} 
                onNvkHandleView={this.nvkHandleView} 
                onNvkHandleDelete={this.nvkHandleDelete} 
              />
            </div>
          </div>
          <div className="col-5 grid-margin">
            {/*Form */}
            <NvkForm renderNvkStudent={this.state.nvkStudent} />
          </div>
        </div>

      </div>
    )
  }
}
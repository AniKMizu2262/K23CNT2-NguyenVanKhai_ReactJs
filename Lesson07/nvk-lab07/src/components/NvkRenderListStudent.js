import React, { Component } from 'react'

export default class NvkRenderListStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            NvkStudent:[
                {nvkID: 1, nvkName: 'Nguyễn Văn Khải', nvkAge: 21, nvkClass: 'K23CNT2'},
                {nvkID: 2, nvkName: 'Nguyễn Minh Tuấn', nvkAge: 21, nvkClass: 'K23CNT2'},
                {nvkID: 3, nvkName: 'Nguyễn Văn A', nvkAge: 18, nvkClass: 'K23CNT3'},
                {nvkID: 4, nvkName: 'Nguyễn Văn B', nvkAge: 25, nvkClass: 'K23CNT1'},
            ],
        }
    }
  render() {
    let nvkElement = this.state.NvkStudent.map((nvkItem, index) => {
        return (
            <tr key={nvkItem.nvkID}>
                <td>{index + 1}</td>
                <td>{nvkItem.nvkID}</td>
                <td>{nvkItem.nvkName}</td>
                <td>{nvkItem.nvkAge}</td>
                <td>{nvkItem.nvkClass}</td>
                <td>
                    <button className='btn btn-danger'>Delete</button>
                    <button className='btn btn-primary mx-1'>Edit</button>
                </td>
            </tr>
        );
    });
    return (
      <div className='alert alert-info'>
        <h2>Danh sách sinh viên : </h2>
        <table className='table table-bordered table-hover'>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>nvkID</th>
                    <th>nvkName</th>
                    <th>nvkAge</th>
                    <th>nvkClass</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {nvkElement}
            </tbody>
        </table>
      </div>
    );
  }
}

import React, { Component } from 'react'

export default class NvkRenderListPhone extends Component {
    constructor(props) {
        super(props);
        this.state = {
            NvkListPhone:[
                {nvkproductId:"P001",nvkproductName:"IPhone11",nvkquantity:15,nvkprice:1000},
                {nvkproductId:"P002",nvkproductName:"IPhone12",nvkquantity:20,nvkprice:1250},
                {nvkproductId:"P003",nvkproductName:"IPhone13",nvkquantity:10,nvkprice:1500},
                {nvkproductId:"P004",nvkproductName:"IPhone14",nvkquantity:15,nvkprice:2000},
            ],
        }
    }
  render() {
    let nvkElement = this.state.NvkListPhone.map((nvkItem, index) => {
        return (
            <tr key={nvkItem.nvkproductId}>
                <td>{index + 1}</td>
                <td>{nvkItem.nvkproductId}</td>
                <td>{nvkItem.nvkproductName}</td>
                <td>{nvkItem.nvkquantity}</td>
                <td>{nvkItem.nvkprice}</td>
                <td>
                    <button className='btn btn-danger'>Delete</button>
                    <button className='btn btn-primary mx-1'>Edit</button>
                </td>
            </tr>
        );
    });
    return (
      <div className='alert alert-info'>
        <h2>Danh sách sản phẩm còn hàng : </h2>
        <table className='table table-bordered table-hover'>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Mã SP</th>
                    <th>Tên sản phẩm</th>
                    <th>Số lượng </th>
                    <th>Giá thành</th>
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

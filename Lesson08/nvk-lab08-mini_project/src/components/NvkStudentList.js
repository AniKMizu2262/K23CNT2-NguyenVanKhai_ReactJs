import React, { Component } from 'react'
import NvkStudent from './NvkStudent'

export default class NvkStudentList extends Component {
    // Hàm xử lý chức năng xem thông tin sinh viên
    nvkHandleView = (nvkStudent) => {
        // Chuyển dữ liệu lên NvkApp
        this.props.onNvkHandleView(nvkStudent);
    };

    // Hàm xử lý chức năng xóa sinh viên
    nvkHandleDelete = (nvkID) => {
        // Chuyển dữ liệu lên NvkApp
        this.props.onNvkHandleDelete(nvkID);
    };

    // Hàm xử lý chuyển sang chế độ sửa
    nvkHandleEditMode = (nvkStudent) => {
        // Chuyển dữ liệu lên NvkApp
        this.props.onNvkHandleEditMode(nvkStudent);
    };

    render() {
        // Lấy dữ liệu từ props từ NvkApp chuyển xuống 
        let { renderNvkStudents } = this.props;

        // Chuyển dữ liệu vào NvkStudent để hiển thị
        let nvkElementStudent = renderNvkStudents.map((nvkItem, index) => {
            return <NvkStudent 
                        key={index} 
                        index={index} 
                        renderNvkStudent={nvkItem} 
                        onNvkHandleView={this.nvkHandleView} 
                        onNvkHandleDelete={this.nvkHandleDelete} 
                        onNvkHandleEditMode={this.nvkHandleEditMode}
                    />
        });
        return (
            <div>
                <div className="card-body">
                    <h3 className="card-title">Danh sách sinh viên</h3>
                    <div className="table-responsive pt-3">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Mã sinh viên</th>
                                    <th>Tên sinh viên</th>
                                    <th>Tuổi</th>
                                    <th>Giới tính</th>
                                    <th>Ngày sinh</th>
                                    <th>Nơi sinh</th>
                                    <th>Địa chỉ</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {nvkElementStudent}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
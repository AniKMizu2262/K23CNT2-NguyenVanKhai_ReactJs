import React, { Component } from 'react'

export default class NvkStudent extends Component {

    // Hàm xử lý chức năng xem thông tin sinh viên
    nvkHandldeView = (nvkStudent) => {
        // Chuyển lên NvkStudentList
        this.props.onNvkHandleView(nvkStudent);
    }

    // Hàm xử lý chức năng xóa sinh viên
    nvkHandleDelete = (nvkID) => {
        // Chuyển lên NvkStudentList
        this.props.onNvkHandleDelete(nvkID);
    }

    // Hàm xử lý chuyển sang chế độ sửa
    nvkHandleEdit = (nvkStudent) => {
        // Chuyển lên NvkStudentList
        this.props.onNvkHandleEditMode(nvkStudent);
    }

    render() {
        // Lấy đối tượng dữ liệu từ NvkStudentList
        let { renderNvkStudent } = this.props;
        
        return (
            <>
                <tr>
                    <td>{this.props.index + 1}</td>
                    <td>{renderNvkStudent.nvkID}</td>
                    <td>{renderNvkStudent.nvkName}</td>
                    <td>{renderNvkStudent.nvkAge}</td>
                    <td>{renderNvkStudent.nvkGender}</td>
                    <td>{renderNvkStudent.nvkBirthday}</td>
                    <td>{renderNvkStudent.nvkBirthPlace}</td>
                    <td>{renderNvkStudent.nvkAddress}</td>
                    <td>
                        <div className="template-demo">
                            <button
                                type="button"
                                className="btn btn-danger btn-icon-text"
                                onClick={() => this.nvkHandldeView(renderNvkStudent)}
                            >
                                Xem
                            </button>
                            <button
                                type="button"
                                className="btn btn-warning btn-icon-text"
                                onClick={() => this.nvkHandleEdit(renderNvkStudent)}
                            >
                                Sửa
                            </button>
                            <button
                                type="button"
                                className="btn btn-success btn-icon-text"
                                onClick={() => this.nvkHandleDelete(renderNvkStudent.nvkID)}
                            >
                                Xóa
                            </button>
                        </div>
                    </td>
                </tr>
            </>
        )
    }
}
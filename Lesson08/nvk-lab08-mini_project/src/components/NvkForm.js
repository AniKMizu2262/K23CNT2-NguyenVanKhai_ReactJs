import React, { Component } from 'react'

export default class NvkForm extends Component {
    render() {
        let { renderNvkStudent } = this.props;
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">Thông tin sinh viên</h3>
                        <form className="form-sample">
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Mã sinh viên</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" value={renderNvkStudent.nvkID} readOnly />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Tên sinh viên</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" value={renderNvkStudent.nvkName} readOnly />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Tuổi</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" value={renderNvkStudent.nvkAge} readOnly />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Giới tính</label>
                                <div className="col-sm-9">
                                    <select className="form-control" value={renderNvkStudent.nvkGender} disabled>
                                        <option>Chọn giới tính</option>
                                        <option>Nam</option>
                                        <option>Nữ</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Ngày sinh</label>
                                <div className="col-sm-9">
                                    <input className="form-control" placeholder="dd/mm/yyyy" value={renderNvkStudent.nvkBirthday} readOnly />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Nơi sinh</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" value={renderNvkStudent.nvkBirthPlace} readOnly />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Địa chỉ</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" value={renderNvkStudent.nvkAddress} readOnly />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary me-2" disabled>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
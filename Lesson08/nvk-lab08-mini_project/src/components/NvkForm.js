import React, { Component } from 'react'

export default class NvkForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nvkStudent: this.props.renderNvkStudent || {
                nvkID: '',
                nvkName: '',
                nvkAge: '',
                nvkGender: '',
                nvkBirthday: '',
                nvkBirthPlace: '',
                nvkAddress: ''
            }
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.renderNvkStudent !== this.props.renderNvkStudent) {
            this.setState({ nvkStudent: this.props.renderNvkStudent });
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            nvkStudent: {
                ...this.state.nvkStudent,
                [name]: value
            }
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.props.isEdit) {
            this.props.onNvkHandleEdit(this.state.nvkStudent);
        } else {
            this.props.onNvkHandleAdd(this.state.nvkStudent);
        }
        this.setState({
            nvkStudent: {
                nvkID: '',
                nvkName: '',
                nvkAge: '',
                nvkGender: '',
                nvkBirthday: '',
                nvkBirthPlace: '',
                nvkAddress: ''
            }
        });
    }

    render() {
        const { nvkID, nvkName, nvkAge, nvkGender, nvkBirthday, nvkBirthPlace, nvkAddress } = this.state.nvkStudent;
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">{this.props.isEdit ? 'Sửa thông tin sinh viên' : 'Thêm mới sinh viên'}</h3>
                        <form className="form-sample" onSubmit={this.handleSubmit}>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Mã sinh viên</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" name="nvkID" value={nvkID} onChange={this.handleChange} readOnly={this.props.isEdit} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Tên sinh viên</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" name="nvkName" value={nvkName} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Tuổi</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" name="nvkAge" value={nvkAge} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Giới tính</label>
                                <div className="col-sm-9">
                                    <select className="form-control" name="nvkGender" value={nvkGender} onChange={this.handleChange}>
                                        <option>Chọn giới tính</option>
                                        <option>Nam</option>
                                        <option>Nữ</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Ngày sinh</label>
                                <div className="col-sm-9">
                                    <input type='date' className="form-control" placeholder="dd/mm/yyyy" name="nvkBirthday" value={nvkBirthday} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Nơi sinh</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" name="nvkBirthPlace" value={nvkBirthPlace} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Địa chỉ</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" name="nvkAddress" value={nvkAddress} onChange={this.handleChange} />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary me-2">
                                {this.props.isEdit ? 'Sửa' : 'Thêm mới'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
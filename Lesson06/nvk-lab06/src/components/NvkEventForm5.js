import React, { Component } from 'react';

class NvkEventForm5 extends Component {
    constructor(props){
        super(props);
        this.state = {
            nvkName:'Nguyễn Văn Khải',
            nvkAge:20,
            nvkGender:'Male',
            nvkCourse:'CSS3'
        }
    }

    // Hàm xử lý sự kiện change
    nvkHandleChange = (event)=>{
        // lấy tên điều khiển
        let name = event.target.name;
        // Lấy giá trị trên điều khiển đang thao tác
        let value = event.target.value;

        // Cập nhật state
        this.setState({
            [name]:value,
        })
    }
    // Sự kiện khi submit form
    nvkHandleSubmit = (ev)=>{
        ev.preventDefault();
        alert(this.state.nvkName + "\n" + this.state.nvkAge);

        // Chuyển dữ liệu trên form lên App component (nvkApp);
        this.props.onnvkHandleSubmit(this.state);
    }
    render() {
        return (
            <div className='alert alert-danger'>
                <h2>Form Student Info </h2>
                <form>
                    <div>
                        <label htmlFor='nvkName'>Student Name:</label>
                        <input type='text' name='nvkName' id='nvkName' 
                            value={this.state.nvkName}
                            onChange={this.nvkHandleChange} />
                    </div>
                    <div>
                        <label htmlFor='nvkAge'>Student Age:</label>
                        <input type='text' name='nvkAge' id='nvkAge' 
                            value={this.state.nvkAge}
                            onChange={this.nvkHandleChange} />
                    </div>
                    <div>
                        <label htmlFor='nvkGender'>Student Gender:</label>
                        <div>
                            <input type='radio' name='nvkGender' id='nvkMale' className='mx-2'
                                value={'Male'}
                                checked={this.state.nvkGender === 'Male'}
                                onChange={this.nvkHandleChange} />
                            <label htmlFor='nvkMale'> Male</label>
                        </div>
                        <div>
                            <input type='radio' name='nvkGender' id='nvkFemale' className='mx-2'
                                value={'Female'}
                                checked={this.state.nvkGender === 'Female'}
                                onChange={this.nvkHandleChange} />
                            <label htmlFor='nvkFemale'> Female</label>
                        </div>
                        <div>
                            <input type='radio' name='nvkGender' id='nvkNone' className='mx-2'
                                value={'None'}
                                checked={this.state.nvkGender === 'None'}
                                onChange={this.nvkHandleChange} />
                            <label htmlFor='nvkNone'> None</label>
                        </div>
                    </div>
                    <div>
                        <label htmlFor='nvkCourse'>
                            <select name='nvkCourse' id='nvkCourse' 
                                    value={this.state.nvkCourse}
                                    onChange={this.nvkHandleChange} >
                                <option value={'HTML5'}>HTML5</option>
                                <option value={'CSS3'}>CSS3</option>
                                <option value={'Javascript'}>Javascript</option>
                                <option value={'Jquery'}>Jquery</option>
                                <option value={'Bootstrap'}>Bootstrap</option>
                            </select>
                        </label>
                    </div>
                    <button onClick={this.nvkHandleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default NvkEventForm5;
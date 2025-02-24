import React, { Component } from 'react'

export default class NvkClassCompEventProps extends Component {
    // Hàm xử lí sự kiện
    nvkEventHandleClick1 = () => {
        alert("Hello...." + this.props.nvkRenderTitle);
    }
  render() {
    return (
      <div className='alert alert-danger'>
        <button className='btn btn-primary mx-1'onClick={this.nvkEventHandleClick1}>Button 1</button>

      </div>
    )
  }
}

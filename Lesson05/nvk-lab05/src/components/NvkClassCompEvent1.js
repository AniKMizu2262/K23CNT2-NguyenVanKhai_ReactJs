import React, { Component } from 'react'

 class NvkClassCompEvent1 extends Component {
    // Hàm xử lí sự kiện
    nvkEventHandleClick1 = () => {
        alert("Button 1 is clicked");
    }

    nvkEventHandleClick2 = (name) => {
        alert("Button 2 is clicked, name = " + name);
    }

  render() {
    return (
      <div className='alert alert-danger'>
         <button className='btn btn-primary mx-1'onClick={this.nvkEventHandleClick1}> Button 1 </button>
         <button className='btn btn-success mx-1'
            onClick={()=>this.nvkEventHandleClick2("Văn Khải")}> Button 2 </button>
      </div>
    )
  }
}

export default NvkClassCompEvent1;
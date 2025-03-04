import React, { Component } from 'react'
import NvkLoginComp from './NvkLoginComp';
import NvkLogoutComp from './NvkLogoutComp';

export default class NvkLoginControl extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn: false,
        }
    }
    // Hàm xử lí sự kiện 
    nvkHandleLogin = (event) => {
        this.setState({
            isLoggedIn: true,
        })
    }
  render() {
    let {isLoggedIn} = this.state;
    let nvkElement = isLoggedIn ? <NvkLoginComp /> : <NvkLogoutComp />;
    return (
      <div className='alert alert-danger'>
        {nvkElement}
        {
            isLoggedIn ?
            <button onClick={()=>this.setState({isLoggedIn:false})}>Logout</button> 
            :<button on onClick={this.nvkHandleLogin}>Login</button>
        }
      </div>
    )
  }
}

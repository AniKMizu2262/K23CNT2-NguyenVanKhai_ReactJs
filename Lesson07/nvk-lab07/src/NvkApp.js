import React, { Component } from 'react'
import NvkLoginControl from './components/NvkLoginControl'
import NvkRenderList from './components/NvkRenderList'
import NvkRenderListStudent from './components/NvkRenderListStudent'

export default class NvkApp extends Component {
  render() {
    return (
      <div>
        <div className="container border my-3">
          <h1>Nguyễn Văn Khải - Render condition, List key</h1>
          <hr />
          <NvkLoginControl />

          <NvkRenderList />

          <NvkRenderListStudent />
        </div>
      </div>
    )
  }
}

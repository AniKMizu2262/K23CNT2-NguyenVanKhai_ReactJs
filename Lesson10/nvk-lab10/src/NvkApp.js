import React from 'react'
import NvkUseState from './Compoents/NvkUseState'
import NvkUseEffect from './Compoents/NvkUseEffect'

export default function NvkApp() {
  return (
    <div className='container border border my-2'>
      <h1>Demo React Hook</h1>
      <NvkUseState />
      <NvkUseEffect />
    </div>
  )
}

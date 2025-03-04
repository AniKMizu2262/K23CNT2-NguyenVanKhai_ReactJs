import React from 'react'

export default function NvkRenderList() {
    const nvkList = ['ReactJS', 'NodeJS', 'VueJS', 'Angular', 'MongoDB', 'ExpressJS'];

    const nvkElement = nvkList.map((item, index) => {
        return <li key={index}>{item}</li>
    });

  return (
    <div className='alert alert-success'>
      <h2>Danh sách :</h2>
      <ul>
      {
        nvkList.map(item => {
            return <li>{item}</li>
        })
      }
      </ul>
      <hr />
      {nvkElement}
    </div>
  )
}

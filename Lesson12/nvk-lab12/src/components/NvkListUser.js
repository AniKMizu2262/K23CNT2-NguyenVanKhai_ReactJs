import React from 'react'

export default function NvkListUser({renderNvkUsers}) {

    const nvkElements = renderNvkUsers.map((nvkItem, index) => {
    return (
      <>
        <tr key={index}>
        <td>{index + 1}</td>
        <td>{nvkItem.ID}</td>
        <td>{nvkItem.nvkFullName}</td>
        <td>{nvkItem.nvkUserName}</td>
        <td>{nvkItem.nvkPass}</td>
        </tr>
      </>
    )
    })
  return (
    <div>
      <h2>Danh sách tài khoản </h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                <th>STT</th>
                <th>ID</th>
                <th>Tên</th>
                <th>User Name</th>
                <th>Password</th>
                </tr>
            </thead>
            <tbody>
                {nvkElements}
            </tbody>
        </table>
    </div>
  )
}

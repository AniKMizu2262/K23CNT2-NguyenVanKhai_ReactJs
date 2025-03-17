import React, { useState } from 'react'

export default function NvkFormUser({onnvkAddNew}) {

  const [nvkID, setNvkID] = useState('')
  const [nvkFullName, setnvkFullName] = useState('')
  const [nvkUserName, setnvkUserName] = useState('')
  const [nvkPass, setnvkPass] = useState('')

  const nvkHandlesumbit = (event) => {
    event.preventDefault();
    console.log(nvkID, nvkFullName, nvkUserName, nvkPass)

    const newUser = {
      ID: nvkID,
      nvkFullName: nvkFullName,
      nvkUserName: nvkUserName,
      nvkPass: nvkPass
    };

    onnvkAddNew(newUser);
  }
  return (
    <div>
      <form onSubmit={nvkHandlesumbit}>
        <p>MSV : </p>
            <input type="text" name="ID" value={nvkID} onChange={(ev)=>setNvkID(ev.target.value)} />
        <p>Tên : </p>
            <input type="text" name="nvkFullName" value={nvkFullName} onChange={(ev)=>setnvkFullName(ev.target.value)} />
        <p>User Name : </p>
            <input type="text" name="nvkUserName" value={nvkUserName} onChange={(ev)=>setnvkUserName(ev.target.value)} />
        <p>Password : </p>
            <input type="password" name="nvkPass" value={nvkPass} onChange={(ev)=>setnvkPass(ev.target.value)} />
        <br />
        <button type="submit" name='nvkSave'>Save</button>
      </form>
    </div>
  )
}
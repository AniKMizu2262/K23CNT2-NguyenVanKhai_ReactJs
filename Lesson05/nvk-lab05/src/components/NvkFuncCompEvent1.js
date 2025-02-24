import React from 'react'

export default function NvkFuncCompEvent1() {

    // Hàm xử lí sự kiện 
    const nvkEventButtonClick1 = () => {
        alert("Button 1 is clicked");
    }

    const nvkEventButtonClick2 = () => {
        alert("Button 2 is clicked");
    }

    const nvkEventButtonClick3 = (name) => {
        alert("Name :"+ name);
    }

    return (
        <div className='alert alert-info'>
            <button className='btn btn-primary mx-1' onClick={nvkEventButtonClick1()}>
                Button 1
            </button>
            <button className='btn btn-success mx-1' onClick={nvkEventButtonClick2}>
                Button 2
            </button>
            <button className='btn btn-success mx-1' onClick={nvkEventButtonClick3("Văn Khải")}>
                Button 3
            </button>
            <button className='btn btn-success mx-1' onClick={()=>nvkEventButtonClick3("Nguyễn Văn Khải")}>
                Button 4
            </button>
        </div>
    )
}

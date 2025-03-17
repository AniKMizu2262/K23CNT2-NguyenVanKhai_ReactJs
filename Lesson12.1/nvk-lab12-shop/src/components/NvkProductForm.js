import React, { useState } from 'react'

const NvkProductForm = ({ onAddProduct }) => {
    const [NvkID, setNvkID] = useState('')
    const [NvkName, setNvkName] = useState('') 
    const [NvkPrice, setNvkPrice] = useState('')
    const [NvkQuantity, setNvkQuantity] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        const newProduct = { NvkID, NvkName, NvkPrice: parseFloat(NvkPrice), NvkQuantity: parseInt(NvkQuantity) }
        onAddProduct(newProduct)
    }

    return (
        <div>
            <h1>Thêm sản phẩm</h1>
            <form onSubmit={handleSubmit}>
                <p>Mã sản phẩm: </p>
                <input type="text" value={NvkID} onChange={(e) => setNvkID(e.target.value)} />
                <p>Tên sản phẩm: </p>
                <input type="text" value={NvkName} onChange={(e) => setNvkName(e.target.value)} /> {/* Updated */}
                <p>Đơn giá: </p>
                <input type="number" value={NvkPrice} onChange={(e) => setNvkPrice(e.target.value)} />
                <p>Số lượng: </p>
                <input type="number" value={NvkQuantity} onChange={(e) => setNvkQuantity(e.target.value)} />
                <br />
                <button type="submit">Save</button>
            </form>
        </div>
    )
}

export default NvkProductForm
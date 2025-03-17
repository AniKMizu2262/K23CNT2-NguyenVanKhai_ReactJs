import React from 'react'

const NvkProductList = ({ NvkProducts }) => {
    return (
        <div>
            <h1>Danh sách sản phẩm</h1>
            <ul>
                {NvkProducts.map(NvkProducts => (
                    <li key={NvkProducts.nvkID}>
                        {NvkProducts.nvkID} - {NvkProducts.nvkName} - {NvkProducts.NvkPrice} VND - {NvkProducts.NvkQuantity} cái
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default NvkProductList
import React from 'react'

const NvkProductList = ({ products }) => {
    return (
        <div>
            <h1>Danh sách sản phẩm</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Mã sản phẩm</th>
                        <th>Tên sản phẩm</th>
                        <th>Đơn giá</th>
                        <th>Số lượng</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.NvkID}>
                            <td>{product.NvkID}</td>
                            <td>{product.NvkName}</td>
                            <td>{product.NvkPrice} VND</td>
                            <td>{product.NvkQuantity} cái</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default NvkProductList
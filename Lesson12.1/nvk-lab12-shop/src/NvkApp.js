import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NvkNavNar from './components/NvkNavNar'
import NvkHome from './components/NvkHome'
import NvkGioiThieu from './components/NvkGioiThieu'
import NvkSanPham from './components/NvkSanPham'
import NvkTinTuc from './components/NvkTinTuc'
import NvkLienHe from './components/NvkLienHe'
import NvkProductList from './components/NvkProductList'
import NvkProductForm from './components/NvkProductForm'
export default function NvkApp() {

  const initialProducts = [
    {ID: "P001", name: "Sản phẩm 1", price: 100000, quantity: 10},
    {ID: "P002", name: "Sản phẩm 2", price: 200000, quantity: 20},
    {ID: "P003", name: "Sản phẩm 3", price: 300000, quantity: 30},
  ]

  const [products, setProducts] = useState(initialProducts)

  // Hàm xử lý sự kiện thêm mới 
  const handleAddProduct = (product) => {
    console.log("handleAddProduct : ", product)

    setProducts(prev => {
      return [...prev, product]
    })
  }

  return (
    <div className='container border my-3'>
      <h1>Shop Center - Nguyễn Văn Khải - K23CNT2 </h1>
      <hr />
      <Router>
        <NvkNavNar />
        <Routes>
          <Route path='/' element={<NvkHome />} />
          <Route path='/gioi-thieu' element={<NvkGioiThieu />} />
          <Route path='/san-pham' element={<NvkSanPham />} />
          <Route path='/tin-tuc' element={<NvkTinTuc />} />
          <Route path='/lien-he' element={<NvkLienHe />} />
          <Route path='/list-product' element={<NvkProductList products={products} />} />
          <Route path='/create-product' element={<NvkProductForm onAddProduct={handleAddProduct} />} />
        </Routes>
      </Router>
    </div>
  )
}
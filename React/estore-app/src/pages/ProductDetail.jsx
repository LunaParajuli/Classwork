import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ProductDetail = () => {
  const [product, setProduct] = useState([])
  const param = useParams()
  const id = param.productId
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/1`)
      .then(
        res => setProduct(res.data)
      )
      .catch(err => console.log(err))

  }, [id])
  return (
    <>

      <div className="product-section">
        <h1 className="text-center text-3xl my-5  font-bold">Product Detail</h1>
        <div className="flex flex-wrap justify-between my-5 mx-20">
          <div className="card-img w-[400px] h-[300px] shadow-md shadow-red-300 ">
            <img src={product.image} alt="laptop" className="w-full h-full hover:translate-y-[-10px] transistion-all delay-150" />
          </div>

          <div className="card-content shadow-md shadow-red-300 w-[400px]  py-5">
            <h2 className="font-bold text-lg text-center w-[400px]">{product.title}</h2>
            <h2 className="text-lg"><span className="font-semibold pl-5">Price-</span>Rs. {product.price}</h2>
            <p className="text-base"><span className="font-semibold pl-5">Category-</span>{product.category}</p>
            <p className="text-base mt-3 text-justify pl-5 pr-2">{product.description}</p>

            <Link to=''>
              <button className="mt-5 bg-blue-500 py-2 px-3 rounded-lg text-white hover:font-bold hover:shadow-lg hover:shadow-cyan-300 hover:translate-y-[-2px] transition-all delay-150 ml-5">Add to Cart</button>
            </Link>
          </div>

        </div>

      </div>

    </>
  )
}

export default ProductDetail
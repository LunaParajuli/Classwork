import React from 'react'
import { Link } from 'react-router-dom'

const Cards = (props) => {
  const { id, title, image, price } = props.data
  return (
    <>

      <div className=" w-full sm:w-1/2 md:w-1/4 p-1 shadow shadow-md shadow-blue-800/50 m-1 mb-5 bg-blue-800 hover:bg-[#6e2c00] rounded-lg  ">

        <div className="  h-[350px] bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700 ">

          <div className="card-img w-full h-[50%] ">
            <Link to="#">
              <img className="h-full w-full rounded-t-lg shadow-md shadow-blue-400 hover:shadow-cyan-500/50 hover:scale-90 hover:animate-pulse" src={image} alt="" />
            </Link>
          </div>

          <div className="p-5">
            <Link to="#">
              <h5 className="mb-1 font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">$ {price}</p>
            <Link to={`/productdetail/${id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              View Detail
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </Link>
          </div>
        </div>

      </div>


    </>
  )
}

export default Cards
import React from 'react'

function Card({hi}){
    console.log(hi)
    //function Card(props){
    //console.log(props.hi)
    return(
        <div className="relative max-w-xs rounded-md shadow-md">
        <img
          src="https://images.pexels.com/photos/3532559/pexels-photo-3532559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-60 rounded-md text-gray-100 space-y-4">
          <h2 className="text-3xl font-semibold tracking-wide">{hi}</h2>
          <p className="text-center text-green-100">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum
            soluta amet corporis accusantium aliquid consectetur eaque!
          </p>
          <button
            type="button"
            className="text-black flex items-center justify-center m-2 px-6 py-3 font-semibold tracking-wide rounded-md bg-blue-800"
          >
            Read more
          </button>
        </div>
      </div>
    )
}

export default Card
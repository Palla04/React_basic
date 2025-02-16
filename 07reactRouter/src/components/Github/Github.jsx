import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github(){

    const data = useLoaderData()

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Palla04')
    //     .then(response => response.json())
    //     .then(data =>{
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])

    return(
        <div className="text-center bg-gray-600 text-white text-3xl">Github followers: {data.followers}</div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Palla04')
    return response.json()
}
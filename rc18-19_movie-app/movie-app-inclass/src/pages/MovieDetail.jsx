import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from "axios"
const MovieDetail = () => {

  const{id}=useParams()

const[detay,setDetay]=useState("")

    const API_KEY = process.env.REACT_APP_TMDB_KEY;

useEffect(()=>{
   axios
     .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
     .then((res) => setDetay(res.data));
},[])

   

  return (
    <div className="md:container px-10 mx-auto py-5">
      <h1 className="text-center dark:text-white text-3xl">{detay.title}</h1>

      <div className="md:container flex justify-center px-10">
        <div className="flex flex-col lg:flex-row max-w-6xl rounded-lg bg-gray-100 shadow-lg">
          <img
            className=" lg:w-1/3 h-96 lg:h-[600px] object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
            src={`https://image.tmdb.org/t/p/w1280${detay.poster_path}`}
            alt="poster"
          />
          <div className="p-6 flex flex-col justify-between">
            <div>
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                Overview
              </h5>
              <p className="text-gray-700 text-base mb-4">{detay.overview}</p>
            </div>
            <ul className="bg-gray-100 rounded-lg border border-gray-400 text-gray-900">
              <li className="px-6 py-2 border-b border-gray-400 w-full rounded-t-lg">
                {"Release Date : " +detay.release_date}
              </li>
              <li className="px-6 py-2 border-b border-gray-400 w-full">
                {"Rate : "+ detay.vote_average}
              </li>
              <li className="px-6 py-2 border-b border-gray-400 w-full">
                {"Total Vote : "+ detay.vote_count}
              </li>
              <li className="px-6 py-2 border-gray-400 w-full rounded-t-lg">
                <Link
                  to={-1}
                  className="text-blue-600 hover:text-blue-700 transition duration-300 ease-in-out mb-4"
                >
                  Go Back
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail
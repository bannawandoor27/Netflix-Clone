import React from 'react'
import { useEffect,useState } from 'react'
import './Banner.css'
import {API_KEY,imageBaseUrl}   from '../../constants/constatnts'
import axios from '../../axios'
function Banner() {
  const [movie,setMovie] = useState()

  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{

      setMovie(response.data.results[Math.floor(Math.random() * response.data.results.length)])

      
    })
  },[])

  return (
    <div className='banner' style={{backgroundImage:`url(${ movie ?imageBaseUrl+ movie.backdrop_path : ''})`}}>
        <div className='content'>
            <h1 className='title'> { movie?movie.title||movie.original_name:''}</h1>
            <div className="banner_buttons">
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='description'>
              {movie?movie.overview:''}
              
            </h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
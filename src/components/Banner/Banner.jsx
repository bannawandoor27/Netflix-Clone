import React from 'react'
import { useEffect } from 'react'
import './Banner.css'
import {API_KEY}   from '../../constants/constatnts'
import axios from '../../axios'
function Banner() {
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data)
      
    })
  },[])

  return (
    <div className='banner'>
        <div className='content'>
            <h1 className='title'> Movie Name</h1>
            <div className="banner_buttons">
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='description'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. 
            </h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
import React,{useEffect,useState} from 'react'
import axios from '../../axios'
import './RowPost.css'
import { API_KEY,imageBaseUrl} from '../../constants/constatnts'

function RowPost() {
  const [movies,setMovies] = useState([])
  
  useEffect(() =>{
    axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213`).then(response=>{
      console.log(response.data.results)
      setMovies(response.data.results)

    })
    
  })
  return (
    <div className='row'>
        <h2 >Netflix Originals</h2>
        <div className="posters">
          {movies.map(obj=>{
            <img src={`${imageBaseUrl+obj.backdrop_path}`} alt="poster" className='poster' />
          })}
        </div>
    </div>
  )
}

export default RowPost
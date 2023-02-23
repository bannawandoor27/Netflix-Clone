import React,{useEffect,useState} from 'react'
import axios from '../../axios'
import './RowPost.css'
import { imageBaseUrl} from '../../constants/constatnts'
import * as urls from '../../urls'
function RowPost(props) {
  const [movies,setMovies] = useState([])
  if(props.title in urls){
    var endpoint = urls[props.title]

  }
  useEffect(() =>{
    axios.get(endpoint).then(response=>{
      console.log(response.data.results)
      setMovies(response.data.results)

    })
    
  },[endpoint])
  return (
    <div className='row'>
        <h2 >{props.title}</h2>
        <div className="posters">
          {movies.map(obj=>{
           return <img src={`${imageBaseUrl+obj.backdrop_path}`} alt="poster" className={`${props.isSmall?'smallposter':'poster'}`}  />
})}
        </div>
    </div>
  )
}

export default RowPost
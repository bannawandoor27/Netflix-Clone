import React,{useEffect,useState} from 'react'
import axios from '../../axios'
import './RowPost.css'
import { imageBaseUrl} from '../../constants/constatnts'
import * as urls from '../../urls'
import YouTube from 'react-youtube'
import { API_KEY } from '../../constants/constatnts'
function RowPost(props) {
  const [movies,setMovies] = useState([])
  const [UrlId,setUrlId] = useState('')

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };
const handleMoviesTrailer = (id) => {
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
      if (response.data.results.length !== 0) {
        setUrlId(response.data.results[0])
      } else {
        console.log('trailer not available')
      }
    })
  };

  if(props.title in urls){
    var endpoint = urls[props.title]
  };
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
           return(
            <div>
             <img onClick={()=>handleMoviesTrailer(obj.id)} src={`${imageBaseUrl+obj.backdrop_path}`} alt="poster" className={`${props.isSmall?'smallposter':'poster'}`}  />
             <h3 className=''>{obj.title}</h3>
             </div>
             )
})}
        </div>
        {UrlId && <YouTube opts={opts} videoId={UrlId.key} /> }
    </div>
  )
}

export default RowPost
import React, { useContext, useEffect, useState } from 'react'
import { MovieContext } from '../Context/Context'

function MovieList() {

const {data,setData,fetchMovie} = useContext(MovieContext) 
const [isData,setisData] = useState([])

const handleSearch = async() => {
  await fetchMovie()
}



  return (
  <>
  <input 
  style = {{height:"50px",width:"200px"}}
  type = "text" value = {data}
  onChange={(e) => setData(e.target.value)} />
  <button
  style = {{height:"30px",width:"60px"}}
  onClick = {handleSearch}>Click</button>
  <div>
  {isData.map((movie,index) => (
 <ul>
  <li key = {index} >{movie.Title}</li>
 </ul>
  ))}
  
</div>

  </>
  )
}

export default MovieList

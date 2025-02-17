import React from "react";
import { createContext } from "react";
import { useState } from "react";
import MovieList from "../Components/MovieList";

const MovieContext = createContext()

const Context = () => {



    const [data,setData] = useState('')

    const fetchMovie = async () => {
        try{
          const respone = await fetch(`http://www.omdbapi.com/?s=${data}&apikey=a3fc92f2`)
           if(!respone.ok){
             console.log("Invalid Response")
           }
           else{
             const result = await respone.json();
             setData(result)
             console.log(result)
           }
        }
        catch(error){
          console.log("Error" + error)
        }
       }
    return(
     <MovieContext.Provider value = {{data,setData,fetchMovie}}>
        <MovieList />
     </MovieContext.Provider>
    )
}

export {MovieContext};
export default Context
import { useSelector } from "react-redux";
import React,{ useState } from 'react';

//component import
import MovieList from "./MovieList";
import Loading from "./Loading";

function Movies(props) {
    const movies = useSelector((state) => state.movies.movies)
    // console.log(movieList);

    const [search, setSearch] = useState("");
    return (
        <>
        
            <div className = "main">
                <div className="search">
                 <input type="search" name="" id="" placeholder="Search..." 
            onChange={(e)=> setSearch(e.target.value)}/>
            </div>
          { movies.length === 0 ?
                    <Loading/> :
        <div className="products">

         
           
            {   
                   

                 movies.filter((movie)=> {
                    if(search === ""){
                        return movie
                    } else if(movie.title.toLowerCase().includes(search.toLowerCase())){
                        return movie
                    }
                        return false
                            
                }).map(movie => {
                    return  <MovieList key={movie.id} movie={movie} />
                             
                       
                })
            }
        </div>
}
        </div>
    </>
    );
}

export default Movies;
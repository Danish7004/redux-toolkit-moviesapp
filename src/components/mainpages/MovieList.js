import React from 'react';
import { Link } from 'react-router-dom';



function MovieList({movie}) {
    


    return (
        <>   
        <div className='product_card'>
            <Link to={`/detail/${movie.id}`}>
            <img src={movie.image} alt="" />
            </Link>
            <div className="product_box">
                
                <h2 title={movie.title}> {movie.title}</h2>
                
                <span>{movie.year}</span>
            </div> 
         </div>
        
        </>
    );
}

export default MovieList;
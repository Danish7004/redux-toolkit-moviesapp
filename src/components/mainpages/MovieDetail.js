import React, { useState, useEffect} from 'react';
import {Box} from '@material-ui/core';
import {useParams} from 'react-router-dom';
import MovieCarousel from './MovieCarousel';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { makeStyles } from "@material-ui/styles";

import { useSelector } from 'react-redux';

const useStyle = makeStyles({
    box:{
        
        margin: "7px 23px ",
        // padding: "7px 33px"
    }
})


const responsive = {
    
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


function DetailProduct(props) {
    const movies = useSelector((state) => state.movies.movies)

    const classes = useStyle()
    
    const params = useParams()
   
    const [movieDetails, setMovieDetails] = useState([])

    useEffect(()=>{
        if(params.id){
            movies.forEach(movie => {
                if(movie.id === params.id) setMovieDetails(movie)
            });
        }
    }, [params.id, movies])   

    // console.log(params)


    if(movieDetails.length === 0) return null;
   
    
    return (
    <>
        <div className="container">
        <div className="detail">
            <img src={movieDetails.image} alt='' />
            <div className="box-detail">
                <div className = "row">
                    <h2>{ movieDetails.fullTitle}</h2>
                </div>
                <span><strong>Rank:</strong> { movieDetails.rank}</span>
                <p><strong>Crew:</strong> { movieDetails.crew}</p>
                <p><strong>ImDb Rating:</strong> { movieDetails.imDbRating}</p>
                <p><strong>Imdb Rating Count:</strong>{ movieDetails.imDbRatingCount}</p>
                <p><strong>Year:</strong>{ movieDetails.year}</p>
            </div>
        </div>

        
          
            <Box className={classes.box} >
            <h2 className={classes.box} >Related Movies</h2>
            <Carousel className={classes.box} responsive={responsive} style={{position: 'none'}}
        infinite={true}
        autoPlay={true}
        centerMode={false}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        showDots={false}
        removeArrowOnDeviceType={['tablet','mobile']}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
        >
       
                {
                    
                    movies.map(movie => {
                        return movie.year === movieDetails.year
                        ?
                       
                          <MovieCarousel key={movie.id} movie={movie} />: null
                                                        
})
   }
      </Carousel> 
      </Box>  
      </div>   
</>
     )
    
    
}

export default DetailProduct;
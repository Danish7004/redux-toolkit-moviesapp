import React from 'react';
import { makeStyles } from "@material-ui/styles";
import { Link } from 'react-router-dom';




const useStyle = makeStyles({
    image:{
        width:'100%',
        height:"370px",
    },
    carousel:{
        marginTop:0,
    },
   
})

function MovieCarousel({movie}) {
    const classes = useStyle();

    return (
                <>
                <Link to = {`/detail/${movie.id}`}>
                    <img src={movie.image} alt="" className={classes.image}/>
                    {/* <h2>{movie.title}</h2> */}
                </Link>    
            </>
        
    );
}

export default MovieCarousel;
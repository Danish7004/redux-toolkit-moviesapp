import { useEffect} from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {addMovies} from './apiSlice';


function DataProvider(props) {
  
 const dispatch= useDispatch()

  useEffect(()=>{
  
  const fetchmovies = async() =>{
       const res = await axios.get("https://imdb-api.com/en/API/Top250Movies/k_wqeikevz")
      //  console.log(res)
      
       dispatch(addMovies(res.data.items))
      }

  fetchmovies(); 

  }, [dispatch])



  return (

     <div>

     </div>
  );
}

export default DataProvider;
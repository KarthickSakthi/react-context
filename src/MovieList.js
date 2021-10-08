import react,{useState} from "react"
import Movie from "./Movie";
const MovieList =()=>{
  const[movies,setMovies]=useState([{
      name:'Harry Potter',
      price:'$10',
      id:23124
  },
  {
    name:'Money Heist',
    price:'$10',
    id:23324
  },
  {
    name:'Game of Thrones',
    price:'$10',
    id:23133
  }]);
  return(
     <div>
         {movies.map(movie=>(
            <Movie name={movie.name} 
               price={movie.price}
               id={movie.id}/>
            
         ))}
     </div>



  );


}
export default MovieList
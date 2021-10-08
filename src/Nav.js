import React,{useContext} from 'react'
import { MovieContext } from './MovieContext'
export default function Nav() {
    const [movies,setMovies]=useContext(MovieContext);
    return (
        <div className='Navbar'>
            <h2 >Karthick</h2>
            <h2>No.of Movies:{movies.length}</h2>
        </div>
    )
}

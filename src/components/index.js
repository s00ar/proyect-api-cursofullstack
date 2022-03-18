import {useState} from 'react';
import Input from "./Input";
import List from './List';
import axios from "axios";

function MovieSearch(){

    const [currMovie,setCurrMovie] = useState("");
    const [movieList,setMovieList] = useState([]);

    const handleChange = (event) =>{
        setCurrMovie(event.target.value);
    }
    const handleDelete =(index) =>{
        const filteredList = movieList.filter(function(movie,currIndex){
            return currIndex !== index;
        })
        setMovieList(filteredList);
    }
    //spread operator
    const handleClick = () =>{
        axios({
            url: `https://api.tvmaze.com/search/shows?q=${currMovie}`,
        }).then(result=> setMovieList(result.data))
        
        
        setCurrMovie("");
    }
    console.log(movieList)
return (
    <section>
        <h1>Lista de peliculas</h1>
        <Input handleChange={handleChange} handleClick={handleClick} currMovie={currMovie}/>
        <List movieList={movieList} handleDelete={handleDelete}/>
    </section>
)
}

export default MovieSearch;


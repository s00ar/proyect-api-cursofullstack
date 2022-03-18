function MovieCard({movie}){
    return(
        <div>
        <ul>
            <li>Nombre: {movie.name}</li>
            <li>Lenguaje: {movie.language}</li>
            <li>Género: {movie.genres[0]}</li>
        </ul>
        </div>
    )
}
export default MovieCard;

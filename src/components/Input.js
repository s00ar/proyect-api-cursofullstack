function Input(props){
    return
    (
        <div>
            <input onChange={props.handleChange} value={props.currMovie}></input>
            <button onClick={props.handleClick}>Buscar Pelicula</button>
        </div>
    )
}

export default Input;


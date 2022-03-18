import Card from "./Card";

function List(props){
    return(
        <div>
            {
            props.movies.map(
                function(movie, index){
                    return <div key={index}><Card movie={movie}/></div>
                }
            )
            }
        </div>
    )
}

export default List;

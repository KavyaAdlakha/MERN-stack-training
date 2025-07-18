import React from 'react'

function Render(){
    const movies= [
        {title: "Inception", year:"2010" },
        {title: "Intersteller", year:"2014"},
        {title: "The Dark Knight", year:2008}
    ];
    return(
        <div style={{textAlign:'center'}}>
            <h1>Movies List:</h1>
            <ul style={{listStyle:'none'}}>
                {movies.map((movie,index)=>(
                    <li key={index}>{movie.title} - {movie.year}</li>
                )
                )}
            </ul>
        </div>
    )
}
export default Render;
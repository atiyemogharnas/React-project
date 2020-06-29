import React from 'react';



const MovieListItem = ({ movie }) => {
    const { id, title, poster_path, release_date, vote_average  } = movie;
    const imgUrl = `https://image.tmdb.org/t/p/w342/${poster_path}`;
    const year = release_date.substring(0, 4);

    return (
        <li key={id} style={movieStyle}>
        <img src={imgUrl} 
             alt={title} 
             style={movieImg}/>
        <div style={movieDescription}>
            <h2 style={movieDescriptionHeadline}>{title}</h2>
            <section style={movieDetails}>
                <div style={movieYear}>
                    <span style={movieTitle}>Year</span>
                    <span>{year}</span>
                </div>   
                <div style={movieRating}>
                    <span style={movieTitle}>Rating</span>
                    <span>{vote_average}</span>
                </div>
            </section>
        </div>
    </li> 
);
};

    
export default MovieListItem;
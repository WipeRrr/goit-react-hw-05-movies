export default function MoviesResult({ movies }) {
    
    return (
        <ul>
            {movies.map(movie => (
                <li key={movies.id}>{movie.title}</li>
            ))}
        </ul>
    )
}
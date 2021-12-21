import { MovieCard } from './MovieCard'

interface MovieRating {
  Value: string
  Source: string
}

interface Movies {
  imdbID: string
  Title: string
  Poster: string
  Runtime: string
  Ratings: Array<MovieRating>
}

interface ContentProps {
  selectedGenre: {
    title: string
  },
  movies: Array<Movies>
}

export function Content(props: ContentProps) {
  return (
    <>
    <header>
      <span className="category">Categoria:<span> {props.selectedGenre.title}</span></span>
    </header>

    <main>
      <div className="movies-list">
        {props.movies.map(movie => (
          <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
        ))}
      </div>
    </main>
    </>
  )
}
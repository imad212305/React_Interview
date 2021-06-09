import { DELETE_MOVIE, DISLIKE_MOVIE, DISLIKE_MOVIE_TOGGLE, FILTER_CATEGORY, GET_ALL_MOVIES, LIKE_MOVIE, LIKE_MOVIE_TOGGLE } from "./types"


export default (state,action) => {
    switch(action.type){
        case GET_ALL_MOVIES:
            return {
                ...state,
                movies: action.payload,
                moviesFiltered: null
            }
            case DELETE_MOVIE:
            return {
                ...state,
                movies: state.movies.filter(movie => movie.id !== action.payload)
            }
            case LIKE_MOVIE:
            return {
                ...state,
                movies: state.movies.map(movie => movie.id === action.payload ? { ...movie, likes: movie.likes+1} : movie)
            }
            case DISLIKE_MOVIE:
            return {
                ...state,
                movies: state.movies.map(movie => movie.id === action.payload ? { ...movie, likes: movie.likes-1} : movie)
            }
            case LIKE_MOVIE_TOGGLE:
                return {
                    ...state,
                    movies: state.movies.map(movie => movie.id === action.payload ? { ...movie, likes: movie.likes+1, dislikes: movie.dislikes-1}: movie )
                }
            case DISLIKE_MOVIE_TOGGLE:
                return {
                    ...state,
                    movies: state.movies.map(movie => movie.id === action.payload ? { ...movie, likes: movie.likes-1, dislikes: movie.dislikes+1}: movie )
                }
                case FILTER_CATEGORY:
                    return {
                        ...state,
                        moviesFiltered: state.movies.filter(movie => movie.category === action.payload)
                    }
    }
}
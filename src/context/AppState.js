import React,{useReducer} from 'react'
import { movies$ } from '../movies'
import AppContext from './AppContext'
import AppReducer from './AppReducer'
import { GET_ALL_MOVIES, DELETE_MOVIE,DISLIKE_MOVIE,DISLIKE_MOVIE_TOGGLE,LIKE_MOVIE,LIKE_MOVIE_TOGGLE, FILTER_CATEGORY } from './types'

const AppState = props => {

    const initialState = {
        movies: null,
        moviesFiltered: null
    }

   const [state, dispatch] = useReducer(AppReducer, initialState)

   //Actions:

   const getAllMovies = async () => {
    await movies$.then(movies => {
        dispatch({
            type: GET_ALL_MOVIES,
            payload: movies
        })
    })
   }

   const deleteMovie = id => {
    dispatch({
        type: DELETE_MOVIE,
        payload: id
    })
   }

   const likeMovie = (id,firstTime) => {
       if(firstTime){
        dispatch({
            type: LIKE_MOVIE,
            payload: id
        })
       }else{
        dispatch({
            type: LIKE_MOVIE_TOGGLE,
            payload: id
        })
       }
   
   }

   const dislikeMovie = (id,firstTime) => {
    if(firstTime){
        dispatch({
            type: DISLIKE_MOVIE,
            payload: id
        })
       }else{
        dispatch({
            type: DISLIKE_MOVIE_TOGGLE,
            payload: id
        })
       }
   }

   const filterOnCategory = category => {
       dispatch({
           type: FILTER_CATEGORY,
           payload: category
       })
   }



    return (
        <AppContext.Provider value={{
            movies: state.movies,
            moviesFiltered: state.moviesFiltered,
            getAllMovies,
            deleteMovie,
            likeMovie,
            dislikeMovie,
            filterOnCategory
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppState

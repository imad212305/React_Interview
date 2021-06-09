import React, {useEffect, useState,useContext} from 'react'
import {Movie} from './Movie'
import AppContext from './context/AppContext'

export const MoviesListing = () => {

    const appContext = useContext(AppContext)
    const {movies,moviesFiltered,getAllMovies,filterOnCategory} = appContext

    const [categList, setCategList] = useState([])
    const [category, setCategory] = useState('')

    const categoryOnChange = e => {
        setCategory(e.target.value)
    }

    useEffect(() => {
    getAllMovies()
    }, []);

    useEffect(() => {
        if(movies !== null){
            console.log('mvs: ',movies)
            let categs = []
            movies.map(movie => !categs.includes(movie.category) && categs.push(movie.category) )
            categs.unshift('')
            setCategList(categs)
        }
        
        
    }, [movies]);

    useEffect(() => {
        if(category !== ''){
            filterOnCategory(category)
        }else{
            getAllMovies()
        }
    }, [category]);

     

    return (
        <div className="container">
            <div className="row">
                <label htmlFor="sel">Filter by Categories:</label>
                <select name="" id="sel" value={category} onChange={categoryOnChange}>
                {categList !== null && categList.map(categ => <option>{categ}</option>)}
                </select>
            </div>
            <div className="row">
               { moviesFiltered !== null ?
                    moviesFiltered.map(filteredMovie => <Movie key={filteredMovie.id} movie={filteredMovie} />) : 
                    <>
                    {
                        movies !== null && movies.map(movie => <Movie key={movie.id} movie={movie} />)
                    }
                    </>
                
            } 
            </div>
            
        </div>
    )
}

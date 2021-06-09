import React,{useContext,useState} from 'react'
import AppContext from './context/AppContext'

export const Movie = ({movie}) => {

    const appContext = useContext(AppContext)
    const {deleteMovie,dislikeMovie,likeMovie} = appContext

    const [toggleLike, setToggleLike] = useState(true)
    const [firstTime, setFirstTime] = useState(true)

    const likeOrDislike = (id) => {
        if(toggleLike){
            likeMovie(id,firstTime)
        }else{
            dislikeMovie(id,firstTime)
        }
        setToggleLike(!toggleLike)
        setFirstTime(false)
    }
    return (
        <div className="col-md-3" style={{marginBottom:6,marginTop:6}}>
            <div class="card">
            <div class="card-body">
            <button onClick={() => deleteMovie(movie.id)} className=" close btn btn-danger" aria-label="Close" style={{float:'right'}}>
                <span aria-hidden="true">&times;</span>
            </button>
                <h5 class="card-title">{movie.title}</h5>
                <p class="card-text">Category : {movie.category}</p>
                <p class="card-text" style={{color:'green'}}>Likes : {movie.likes}</p>
                <p class="card-text" style={{color:'red'}}>Dislikes : {movie.dislikes}</p>
                <button className={toggleLike ? 'btn btn-success' : 'btn btn-warning'} style={{marginRight:6}} onClick={() => likeOrDislike(movie.id) }>{toggleLike ? 'Like' : 'Dislike'}</button>
            </div>
        </div> 
        </div>
       
    )
}

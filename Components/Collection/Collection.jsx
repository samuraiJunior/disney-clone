import { useEffect, useState } from "react"
import s from "./Collection.module.scss"
import CollectionItem from "./CollectionItem"
import { useDispatch, useSelector } from "react-redux"
import { useGetMQuery } from "../../BLL/API/API"

const Collection = ({ src, actionCreator, title }) => {
    const IsShow=()=>{
        if(title.toLowerCase().includes("movies")){
          return "movie"
        }
        else if(title.toLowerCase().includes("shows")){
          return  "show"
        }
      }
    const BaseImgUrl=useSelector(state=>state.movie.BaseImgUrl)
    const { data } = useGetMQuery(src)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(actionCreator(data))
    })
    //results
    //poster_path  `https://api.themoviedb.org/3/${}?api_key=ceb8ea3378a17b929ab6699ec4f59e73`
    //https://image.tmdb.org/t/p/original/
    // https://api.themoviedb.org/3/tv/popular?api_key=ceb8ea3378a17b929ab6699ec4f59e73&language=en-US&page=1
    const item = data?.results?.map(m => <CollectionItem key={m.id} src={m.backdrop_path !== null ?
        BaseImgUrl + m.backdrop_path : BaseImgUrl + m.poster_path} id={m.id} title={IsShow()}/>)
    return (
        <div className={s.CollectionWrapper}>
            <h3>{title}</h3>
            <div className={s.Collection}>
                {item}
            </div>
        </div>
    )
}

export default Collection

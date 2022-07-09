import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'
import s from "./SearchedItemCard.module.scss"

const SearchedItemCard = ({data}) => {
  const BaseImgUrl = useSelector(state => state.movie.BaseImgUrl)
  const overview=data?.overview.slice(0,50)
  return (
    <div className={s.SearchedItemCard}>
      <div className={s.imgWrapper}>
        <Image layout='fill'  objectFit='cover' objectPosition={"center"} src={data?.backdrop_path !== null ? BaseImgUrl + data?.backdrop_path : BaseImgUrl + data?.poster_path} alt="Poster"/>
      </div>
      <div className={s.CardContent}>
        <h4>{data?.title || data?.name}</h4>
        <p>{data?.genres?.map((genre, index) => genre.name + `${data?.genres.length === index + 1 ? " " : ", "}`)}{" "}</p>
        <p>{overview}</p>
      </div>
    </div>
  )
}

export default SearchedItemCard

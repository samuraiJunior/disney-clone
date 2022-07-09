import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { useGetSearchedMQuery } from '../../BLL/API/API'
import CollectionItem from '../../Components/Collection/CollectionItem'
import Header from '../../Components/Header/Header'
import s from "../../styles/Pages.module.scss"

const Searched = () => {
  const router = useRouter()
  const variant = router.query.query?.split(" ")[0]
  const name = router.query.query?.substring(router.query.query.lastIndexOf("+") + 1)
  const { data, error } = useGetSearchedMQuery({ variant, name })
  const BaseImgUrl = useSelector(state => state.movie.BaseImgUrl)

  const card = data?.results?.map(i => <CollectionItem key={i.id}
    src={i?.backdrop_path !== null ? BaseImgUrl + i?.backdrop_path : BaseImgUrl + i?.poster_path}
    title={variant === "tv" ? "show" : "movie"} id={i.id} />)

  return (
    <Header>
      {data?.results?.length === 0 ? <p className={s.NullResultText}>К сожелению не удалось ничего найти по запросу {name}</p> :
          <p className={s.FindResultText}>По запросу: {name} были найденны следующие {variant==="tv"?"ТВ шоу":"фильмы"}</p>}
      <div className={s.SearchedPage}>
        {error && <p>Произошла ошибка</p>}
        {card}
      </div>
    </Header>
  )
}

export default Searched

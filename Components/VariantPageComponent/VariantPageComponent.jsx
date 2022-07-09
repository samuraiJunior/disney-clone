import Head from "next/head"
import { useSelector } from "react-redux"
import CollectionItem from "../../Components/Collection/CollectionItem"
import Header from "../../Components/Header/Header"
import Paginator from "../../Components/Pagination/Pagination"
import s from "./VariantPageComponent.module.scss"

const VariantPageComponent = ({data,currentPage,setCurrentPage,variant}) => {
    const BaseImgUrl = useSelector(state => state.movie.BaseImgUrl)
    const card = data?.results?.map(i => <CollectionItem key={i.id}
        src={i?.backdrop_path !== null ? BaseImgUrl + i?.backdrop_path : BaseImgUrl + i?.poster_path}
        title={"show"} id={i.id} />)
    return (
        <Header>
            <Head>
        <title>Disney+ |{variant}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
            <div className={s.container}>
                <Paginator total_pages={data?.total_pages !== undefined || null ? data?.total_pages : 11}
                    currentPage={currentPage} setCurrentPage={setCurrentPage} />
                <div className={s.VariantWrapper} >
                    {card}
                </div>
            </div>
        </Header>
    )
}

export default VariantPageComponent

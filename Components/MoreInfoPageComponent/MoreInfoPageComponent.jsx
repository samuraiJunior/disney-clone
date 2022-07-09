import Head from "next/head"
import Image from "next/image"
import  { useRouter } from "next/router"
import { useState } from "react"
import ReactPlayer from "react-player"
import { useSelector } from "react-redux"
import { HiX } from "react-icons/hi"
import Link from "next/link"
import Button from "../Buttons/Button"
import s from "./MoreInfoPageComponent.module.scss"

const MoreInfoPageComponent = ({ data, variant }) => {

  const BaseImgUrl = useSelector(state => state.movie.BaseImgUrl)
  const [PlayTrailer, SetPlayTrailer] = useState(false)
  const index = data?.videos?.results?.findIndex(
    (element) => element.type === "Trailer"
  )

  return (
    <div>
      <Head>
        <title>Disney+ |{data?.title || data?.original_name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={s.showMore}>
        <Image layout="fill" objectFit="cover"
          objectPosition={"top center"}
          className={s.showMore__backImg}
          src={data?.backdrop_path !== null ? BaseImgUrl + data?.backdrop_path : BaseImgUrl + data?.poster_path} alt={"poster"} />
        <span className={s.overlay}></span>

        <div className={s.showMore__content} ShowMore>
          <h4>{data?.title || data?.name}</h4>
          <div className={s.btnWrapper}>
            <Button text={"Play"} color={"white"} />
            <Button text={"Trailer"} play={SetPlayTrailer} />
          </div>

          <p className={s.Info}>
            {variant === "movie" ? <><span>{data?.release_date || data?.first_air_date} •{" "}</span>
              <span>{Math.floor(data?.runtime / 60)}ч {data?.runtime % 60}мин •{" "}</span>
              <span>{data?.production_countries?.map((country, index) => country.iso_3166_1 + `${data?.production_countries.length === index + 1 ? " " : ", "}`)}
               • {" "}</span>
              <span>{data?.genres?.map((genre, index) => genre.name + `${data?.genres.length === index + 1 ? " " : ", "}`)}
              {" "}</span></>
              :
              <>
                <span>{`${data?.release_date || data?.first_air_date}
              ${data?.status === "Ended" ? " - " + data?.last_air_date + " " : "- ...  "}`}
                  • {" "}</span>

                <span>{data?.number_of_seasons}{" "}</span>

                <span>{data?.number_of_seasons === 1 ? "Сезон" : "Сезонов"} •{" "}</span>

                <span>{data?.episode_run_time[0] >= 60 ? `${Math.floor(data?.episode_run_time[0] / 60)}ч` : null}{" "}

                  {data?.episode_run_time[0] % 60}мин •{" "}</span>
                <span>{data?.origin_country?.map((country, index) => country + `${data?.origin_country.length === index + 1 ? " " : ", "}`)}
               •{" "}</span>
                <span>{data?.genres?.map((genre, index) => genre.name + `${data?.genres.length === index + 1 ? " " : ", "}`)}
                  {" "}</span>
              </>}
          </p>
          <p className={s.content__overview}>{data?.overview}</p>
        </div>

        {PlayTrailer ?

          <div className={s.PlayerWrapper}>
            <span onClick={() => SetPlayTrailer(false)}><HiX /></span>
            <ReactPlayer
              url={`http://www.youtube.com/watch?v=${data?.videos?.results[index]?.key}`}
              width="50%"
              height="50%"
              style={{ position: "absolute" }}
              controls={true}
              playing={PlayTrailer}

            />
          </div>

          : null}

      </section>
    </div>
  )
}

export default MoreInfoPageComponent

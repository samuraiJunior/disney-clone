import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import s from "./Slider.module.scss"
import Image from "next/image";
import { useSelector } from "react-redux";
import Link from "next/link";
import { useMediaQuery } from "@mui/material";


const Slider = () => {
  const movies = useSelector(state => state.movie.MoviesPop)
  const SlidesAmount = []
  const BaseImgUrl=useSelector(state=>state.movie.BaseImgUrl)
  const matches=useMediaQuery("(max-width:500px)")
  for(let i;i<=7;i++){
    SlidesAmount.push(i)
  } 

  const randomSlides = () => {
    if (movies?.results !== undefined) {
      const randomMovie = () => {
        const movieData = [...movies?.results]
        const OnceMovie = movieData.splice(Math.random() * movies?.results?.length, 7)[0]
        return OnceMovie
      }
      const Slides = SlidesAmount.map(e => randomMovie())
      const SlidesSet=[...new Set(Slides)]
      while(SlidesSet.length !==7){
        Slides.push(randomMovie())
        SlidesSet=[...new Set(Slides)]
      }
      if (Slides !== NaN) {
        const Slide = SlidesSet.map(sl =><div key={sl} className={s.imgWrap}>
          <Link href={`/movie/${sl.id}`}><a>
          <Image  layout="fill" 
            objectFit={"fill"} sizes={!matches?"35vw":"100vw"} quality={100}
            objectPosition={"center"}
             loading="lazy" src={BaseImgUrl + sl.backdrop_path} alt="slide" />
             </a>
             </Link>
        </div>)
        return Slide 
      }
    }

  }
  return (
    <section className={s.slider}>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
        className={s.Carousel}
      >
        {randomSlides()}
      </Carousel>
    </section>
  )
}

export default Slider

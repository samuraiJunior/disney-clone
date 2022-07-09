import Head from "next/head"
import Brands from "../Components/Brands/Brands"
import Collection from "../Components/Collection/Collection"
import Header from "../Components/Header/Header"
import Slider from "../Components/Slider/Slider"
import styles from "../styles/Home.module.scss"
import { addPOPMovies, addPOPtv, addRatedMovies, addRatedTV } from "../BLL/Slices/MovieSlice"


export default function Home() {
  return (
    <div className={styles.App}>
      <Head>
        <title>
          Disney+ clone
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Slider />
      <div className={styles.container}>
        <Brands />
        <Collection actionCreator={addPOPMovies} title={"Popular movies"}
          src={{src:"movie/popular"}} />
        <Collection actionCreator={addPOPtv} title={"Popular TV Shows"}
          src={{src:"tv/popular"}} />
        <Collection actionCreator={addRatedMovies} title={"Top rated movies"}
          src={{src:"movie/top_rated"}} />
        <Collection actionCreator={addRatedTV} title={"Top rated TV Shows"}
          src={{src:"tv/top_rated"}} />
      </div>

    </div>
  )
}

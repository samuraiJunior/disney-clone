import Brand from "./Brand";
import s from "./Brands.module.scss"
const Brands = () => {
    return (
        <section className={s.BrandsSection}>
            <Brand imgSRC={"/images/disnep.png"} videoSRC={"/videos/disney.mp4"} />
            <Brand imgSRC={"/images/pixar.png"} videoSRC={"/videos/pixar.mp4"} />
            <Brand imgSRC={"/images/marvel.png"} videoSRC={"/videos/marvel.mp4"} />
            <Brand imgSRC={"/images/starwars.png"} videoSRC={"/videos/star-wars.mp4"} />
            <Brand imgSRC={"/images/national-geographic.png"} videoSRC={"/videos/national-geographic.mp4"} />
        </section>
    );
}

export default Brands;

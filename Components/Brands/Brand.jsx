import Image from "next/image"
import s from "./Brands.module.scss"

const Brand = ({ imgSRC, videoSRC }) => {
    return (
        <div className={s.brand}>
            <Image src={imgSRC} priority={true} className={s.imgWrap} layout={"fill"} 
              objectFit="cover" alt="brand" />
            <video
               className={s.BrandVideo}
                autoPlay={true}
                loop={true}
                playsInline={true}
                muted
            >
                <source src={videoSRC} type="video/mp4" />
            </video>
        </div>
    )
}

export default Brand

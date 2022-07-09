import Image from 'next/image'
import Link from "next/link"
import s from "./Collection.module.scss"

const CollectionItem = ({ src, id, title }) => {
  return (
    <Link href={`/${title}/`+id}>
    <div className={s.CollectionItem}>
      <Image alt='item' src={src}
        layout={"fill"} objectPosition={"top center"} objectFit={"cover"} />
    </div>
    </Link>
  )
}

export default CollectionItem

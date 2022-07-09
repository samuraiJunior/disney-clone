
import { useRouter } from "next/router"
import { useGetOnceMQuery } from "../../BLL/API/API"
import MoreInfoPageComponent from "../../Components/MoreInfoPageComponent/MoreInfoPageComponent"

const IId = () => {
  const router = useRouter()
  const { data, error } = useGetOnceMQuery(router.asPath)
  return (
    <MoreInfoPageComponent variant={"movie"} data={data&&data}/>
  )
}

export default IId

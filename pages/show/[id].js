import { useRouter } from 'next/router'
import React from 'react'
import { useGetOnceMQuery } from '../../BLL/API/API'
import MoreInfoPageComponent from '../../Components/MoreInfoPageComponent/MoreInfoPageComponent'

const Id = () => {
  const router = useRouter()
  const { data, error } = useGetOnceMQuery("tv/"+router.query.id)
  console.log(data)

  return (
    <MoreInfoPageComponent variant={"show"} data={data&&data}/>

  )
}

export default Id

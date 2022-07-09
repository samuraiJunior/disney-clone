
import React, { useState } from "react"
import { useGetMQuery } from "../../BLL/API/API"
import VariantPageComponent from "../../Components/VariantPageComponent/VariantPageComponent"

const Index = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const { data } = useGetMQuery({ src: "movie/popular", page: currentPage })
    return (
        <VariantPageComponent data={data} variant={"movie"} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    )
}

export default Index

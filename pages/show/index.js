
import React, { useState } from "react"
import { useGetMQuery } from "../../BLL/API/API"
import VariantPageComponent from "../../Components/VariantPageComponent/VariantPageComponent"


const Index = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const { data } = useGetMQuery({ src: "tv/popular", page: currentPage })
    
    return (
        <VariantPageComponent data={data} variant={"shows"} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    )
}

export default Index

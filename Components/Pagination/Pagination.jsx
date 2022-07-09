import {  Pagination, useMediaQuery } from "@mui/material"
import s from "./Pagination.module.scss"
const Paginator = ({ total_pages, currentPage, setCurrentPage }) => {
  const querys = {
    descktop: useMediaQuery("(min-width:826px)"),
    lapTop: useMediaQuery("(min-width:641px)"),
    table: useMediaQuery("(min-width:549px)"),
    mobile: useMediaQuery("(max-width:351px)"),
  }
  
  return (
    <div className={s.PaginationWrapper}>
      <Pagination page={currentPage} sx={{
        ".css-wjh20t-MuiPagination-ul": { justifyContent: "space-between" }, background: "transaperent",
        ".css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected": { background: "#ffffffa1", color: "black" },
        ".css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root.Mui-disabled": { background: "white", color: "black" },
        ".css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root": { background: "white" },
        ".css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root:hover": { background: "#ffffffa1" },
        ".css-1v2lvtn-MuiPaginationItem-root":{color: "white" },
      }}
        size={"medium"}
        siblingCount={querys.descktop && 5 || querys.lapTop && 3 || querys.table && 2}
        className={s.Pagination} onChange={(_, page) => setCurrentPage(page)}
        count={total_pages} />
    </div>
  )
}

export default Paginator

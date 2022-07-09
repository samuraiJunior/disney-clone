import { Pagination, useMediaQuery } from "@mui/material"
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
        ".MuiPagination-ul": { justifyContent: "space-between" }, background: "transaperent",
        ".MuiPaginationItem-root.Mui-selected": { background: "#ffffffa1", color: "white" },
        ".MuiPaginationItem-root.Mui-disabled": { background: "#ffffffa1", color: "white" },
        ".MuiPaginationItem-root:hover": { background: "#ffffffa1" },
        ".MuiPaginationItem-root": { color: "white" },
      }}
        size={"medium"} 
        siblingCount={querys.descktop && 5 || querys.lapTop && 3 || querys.table && 2}
        className={s.Pagination} onChange={(_, page) => setCurrentPage(page)}
        count={total_pages} />
    </div>
  )
}

export default Paginator

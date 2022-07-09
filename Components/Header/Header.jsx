import Image from 'next/image'
import { useRouter } from "next/router"
import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import MenuIcon from '@mui/icons-material/Menu';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import s from "./Header.module.scss"
import { IoHome } from "react-icons/io5"
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai"
import { AiFillStar } from "react-icons/ai"
import NavItem from './NavItem';
import { Divider, Hidden, List, ListItem } from '@mui/material';
import SearchForm from '../SearchForm/SearchForm';

const Header = ({ children }) => {
  const router = useRouter()
  const { handleSubmit, register } = useForm()
  const [ShowInput, SetShowInput] = useState(false)
  const [openSwipe, setOpenSwipe] = useState(false)

  const matches = useMediaQuery('(max-width:1550px)');
  const SendSearchData = (data) => {
    router.push(`/searched/${data.variant} + ${data.name}`)
  }
  const NavigateToHome = () => {
    router.push("/")
  }
  const NavigateToShow = () => {
    router.push("/show/")
  }
  const NavigateToMovie = () => {
    router.push("/movie/")
  }
  const showInput = () => {
    SetShowInput(!ShowInput)
  }
  return (<>
    <div className={s.Header}>
      <div className={s.logoWrapper}>
        <Image src={"/images/logo.svg"} width={100} height={100} alt={"logo"} />
      </div>

      <ul className={s.NavItemsWrapper}>
        <NavItem src={<IoHome />} reactIcon={true} handleClick={NavigateToHome} text={"Home"} />
        <NavItem src={<AiOutlineSearch />} reactIcon={true} text={"Search"} handleClick={showInput} />
        <NavItem src={<AiOutlinePlus />} reactIcon={true} text={"WatchList"} />
        <NavItem src={<AiFillStar />} reactIcon={true} text={"Originals"} />
        <NavItem src={"/images/movie-icon.svg"} reactIcon={false} handleClick={NavigateToMovie} text={"Movies"} alt={"Movies"} />
        <NavItem src={"/images/series-icon.svg"} reactIcon={false} handleClick={NavigateToShow} text={"Series"} alt={"Series"} />
      </ul>

      {ShowInput && !matches ? <>
        <SearchForm handleSubmit={handleSubmit} register={register} SendSearchData={SendSearchData} />
      </> : null}

      {matches ? <>
        <IconButton onClick={() => setOpenSwipe(true)} size={"large"} edge={"start"}>
          <MenuIcon sx={{ width: "50px", height: "50px", color: "white" }} />
        </IconButton>
        {/*<Divider />*/}
        <SwipeableDrawer onClose={() => setOpenSwipe(false)} onOpen={() => setOpenSwipe(true)} anchor={"right"}
          open={openSwipe}>
          <List style={{
            background: "black", display: "flex",
            flexDirection: "column", flex: "1", justifyContent: "space-evenly", width: "320px",
          }}>
            <ListItem >
              <SearchForm handleSubmit={handleSubmit} size={"small"} register={register} SendSearchData={SendSearchData} />
            </ListItem>
            <NavItem src={<IoHome />} reactIcon={true} handleClick={NavigateToHome} text={"Home"} />
            <NavItem src={<AiOutlinePlus />} reactIcon={true} text={"WatchList"} />
            <NavItem src={<AiFillStar />} reactIcon={true} text={"Originals"} />
            <NavItem src={"/images/movie-icon.svg"}
              reactIcon={false} handleClick={NavigateToMovie} text={"Movies"} alt={"Movies"} />
            <NavItem src={"/images/series-icon.svg"} reactIcon={false} handleClick={NavigateToShow} text={"Series"} alt={"Series"} />

          </List>
        </SwipeableDrawer>
      </>
        : null}

    </div>
    {children}
  </>
  )
}

export default Header

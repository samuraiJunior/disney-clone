import { useState } from "react"
import s from "./SearchForm.module.scss"

const SearchForm = ({ handleSubmit, register, SendSearchData,small }) => {
  const [options] = useState([{ name: "movie" }, { name: "tv" }])
  return (
    <div className={`${s.FormWrapper} ${s.small}`}>
      <form onSubmit={handleSubmit(SendSearchData)}>
        <input  placeholder='Введите название' {...register("name")} type="text" />
        <select defaultValue={"movie"} {...register("variant")}>
          {options.map((option) => (
            <option key={option.name} value={option.name}>
              {option.name}
            </option>
          ))}
        </select>
      </form>
    </div>
  )
}

export default SearchForm

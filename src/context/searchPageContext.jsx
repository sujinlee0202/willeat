import { createContext, useEffect, useState } from "react";
import { clickPlaceMap, searchMap } from "../api/naver_map";

export const searchPageContext = createContext()

const SearchPageProvider = ({children}) => {
  const [showSearchPlace, setShowSearchPlace] = useState(false)
  const [coord, setCoord] = useState([])

  const onClickSearchCard = (place) => {
    console.log(place.mapx, place.mapy, 'place')
    setShowSearchPlace(true)
    setCoord([place.mapx, place.mapy])
  }


  return (
    <searchPageContext.Provider value={{showSearchPlace, onClickSearchCard, coord}}>
      {children}
    </searchPageContext.Provider>
  )
}

export default SearchPageProvider
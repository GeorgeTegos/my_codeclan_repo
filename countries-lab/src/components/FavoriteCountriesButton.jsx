import React, { useState } from "react"
import Heart from "react-heart"
import HeartButton from "./HeartButton"

function FavoriteCountriesButton({favoriteCountries, country, setFavoriteCountries, handleFavoriteSearch}) {
  const [active, setActive] = useState(false)

  return (
    <>
        { handleFavoriteSearch(country) == true
        ?
          <HeartButton 
            active={active} 
            setActive={setActive} 
            favoriteCountries={favoriteCountries} 
            setFavoriteCountries={setFavoriteCountries}
            country={country}/>
        :
          <HeartButton 
              active={active} 
              setActive={setActive} 
              favoriteCountries={favoriteCountries} 
              setFavoriteCountries={setFavoriteCountries}
              country={country}/>
        }
    </>
  )
}

export default FavoriteCountriesButton
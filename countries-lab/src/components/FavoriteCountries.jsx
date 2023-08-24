import React from 'react'

function FavoriteCountries({favoriteCountries, country, setFavoriteCountries, handleFavoriteSearch}) {

  return (
    <>
        { handleFavoriteSearch(country) != true
        ? 
        <button onClick={()=>
        setFavoriteCountries([...favoriteCountries,country])}> Fav</button>
        :<h4>Liked !</h4>}
    </>
  )
}

export default FavoriteCountries
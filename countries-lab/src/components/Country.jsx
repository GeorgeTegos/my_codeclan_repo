import React from 'react'

function Country({country, favoriteCountries, setFavoriteCountries, handleFavoriteSearch }) {
    console.log(country)
    console.log(favoriteCountries)
    console.log(country)
  return (
    <>
    {handleFavoriteSearch(country) != true 
    ? <button onClick={()=>setFavoriteCountries([...favoriteCountries,country])}> Fav</button>
    : <h4>Liked !</h4>}

    <div className='country-wrapper'>
    <img src={country.flags.png} alt="s" />

    <h3>Country:</h3> 
    <span className='country-text'>{country.name.common} 
    </span> 
    <h4>Capital:</h4>
    <span className='capital-text'> {country.capital[0]}</span>
    <h4></h4>
    
    <h4>Population</h4>
    {country.population}

    </div>
    </>
  )
}

export default Country
import React from 'react'
import Heart from 'react-heart'
import { useState } from 'react'

function Country({country, favoriteCountries, setFavoriteCountries, handleFavoriteSearch }) {
  const [active, setActive] = useState(false)

    return (
    <>
    {favoriteCountries.includes(country) == true
    ? 
    <Heart isActive={!active} onClick={() =>{ 
      setFavoriteCountries([...favoriteCountries.filter((countryToRemove)=> countryToRemove !== country)])
      setActive(active)}}
      animationTrigger = "both" 
      inactiveColor = "rgba(255,125,125,.75)" 
      activeColor = "#e019ae" 
      animationDuration = {0.1}
      style={{width:"1rem"}}/>   
    :
    <Heart isActive={active} onClick={() =>{ 
      setFavoriteCountries([...favoriteCountries,country])
      setActive(active)}}
      animationTrigger = "both" 
      inactiveColor = "rgba(255,125,125,.75)" 
      activeColor = "#e019ae" 
      animationDuration = {0.1}
      style={{width:"1rem"}}/> 
    }

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

    <h5>Neighbor Countries</h5>
    <ul>
      {console.log(country.borders)}
      {console.log(country.altSpellings[0])}
    </ul>

    </div>
    </>
  )
}

export default Country
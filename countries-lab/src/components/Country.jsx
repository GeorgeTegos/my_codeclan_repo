import React from 'react'
import Heart from 'react-heart'
import { useState } from 'react'

function Country({country, favoriteCountries, setFavoriteCountries, handleFavoriteSearch }) {
  const [active, setActive] = useState(false)

    return (
    <>
    <div className='country-wrapper'>
      <div className='heart-flag'>
        <div className='heart'>
    {favoriteCountries.includes(country) == true
    ? 
    <Heart isActive={!active} onClick={() =>{ 
      setFavoriteCountries([...favoriteCountries.filter((countryToRemove)=> countryToRemove !== country)])
      setActive(active)}}
      animationTrigger = "both" 
      inactiveColor = "rgba(255,125,125,.75)" 
      activeColor = "#e019ae" 
      animationDuration = {0.1}
      style={{width:"2rem"}}/>   
    :
    <Heart isActive={active} onClick={() =>{ 
      setFavoriteCountries([...favoriteCountries,country])
      setActive(active)}}
      animationTrigger = "both" 
      inactiveColor = "rgba(255,125,125,.75)" 
      activeColor = "#e019ae" 
      animationDuration = {0.1}
      style={{width:"2rem"}}/> 
    }
      </div>

    
    <img src={country.flags.png} alt={country.name.common} className='country-flag'/>
    </div>
    <span className='country-name-wrapper'>
      <h3>Country:</h3> 
      <span className='country-text'>{country.name.common} </span>
    </span>
    
    <span className='country-capital-wrapper'>
      <h4>Capital:</h4>
      <span className='capital-text'> {country.capital[0]}</span>
    </span>
    
    <span className='country-population-wrapper'>
      <h4>Population</h4>
      {country.population}
    </span>

    <span className='country-neighbors-wrapper'>
      <h5>Neighbor Countries</h5>
      <ul>
        {console.log(country.borders)}
        {console.log(country.altSpellings[0])}
      </ul>
    </span>
    </div>
    </>
  )
}

export default Country
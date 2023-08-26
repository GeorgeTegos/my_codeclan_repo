import React, { useState } from 'react'
import Country from './Country'
import FavoriteCountriesButton from './FavoriteCountriesButton'

function CountriesList({countries , country, setCountry,favoriteCountries, setFavoriteCountries}) {
    const handleFavoriteSearch = (country) =>{
        return favoriteCountries.some(item => item === country)
    }

  return (
    <div className='countries-list-wrapper'>
    {country != null
    ?
    <Country country = {countries[country]} 
        favoriteCountries={favoriteCountries} 
        setFavoriteCountries={setFavoriteCountries}
        handleFavoriteSearch={handleFavoriteSearch}
        />

    : countries.map((country, index)=>{
        return (
        <>
        <li key={index} className='countries-list-item'> {country.name.common} 
    <FavoriteCountriesButton 
        favoriteCountries={favoriteCountries} 
        country={country} 
        setFavoriteCountries={setFavoriteCountries}
        handleFavoriteSearch={handleFavoriteSearch}
        />
        <button onClick={()=>setCountry(index)}>More info</button>
        </li> 
        </>
    )})}
    </div>
  )
}

export default CountriesList
import React, { useState } from 'react'
import Country from './Country'
import FavoriteCountriesButton from './FavoriteCountriesButton'
// import { v4 as uuidv4 } from 'uuid'

function CountriesList({countries , country, setCountry,favoriteCountries, setFavoriteCountries}) {
    
    const handleFavoriteSearch = (country) =>{
        return favoriteCountries.includes(country)
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
            <li key={index} className='countries-list-item'> 
                <img className="flag-button" 
                    src={country.flags.png} 
                    alt={country.name.common} 
                    onClick={()=>setCountry(index)}/> 
                <div className='add-to-favorite-countries'>
                    <FavoriteCountriesButton 
                        favoriteCountries={favoriteCountries} 
                        country={country} 
                        setFavoriteCountries={setFavoriteCountries}
                        handleFavoriteSearch={handleFavoriteSearch}
                    />
                </div>
            </li> 

        </>
    )})
    
    }
    </div>
  )
}

export default CountriesList
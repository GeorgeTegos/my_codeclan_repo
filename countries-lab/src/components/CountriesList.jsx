import React, { useState } from 'react'
import Country from './Country'
import FavoriteCountries from './FavoriteCountries'

function CountriesList({countries , country, setCountry}) {
    const [favoriteCountries,setFavoriteCountries] = useState([])

    const handleFavoriteSearch = (country) =>{
        return favoriteCountries.some(item => item === country)
    }



  return (
    <>
    {country != null?
    <Country country = {countries[country]} 
        favoriteCountries={favoriteCountries} 
        setFavoriteCountries={setFavoriteCountries}
        handleFavoriteSearch={handleFavoriteSearch}
        />

    : countries.map((country, index)=>{
        return (
        <li key={index}> {country.name.common} {country.name.flag}
        <FavoriteCountries 
            favoriteCountries={favoriteCountries} 
            country={country} 
            setFavoriteCountries={setFavoriteCountries}
            handleFavoriteSearch={handleFavoriteSearch}/>

        <button onClick={()=>setCountry(index)}>More info</button>
        </li> 
        
        
        )})}
    </>
  )
}

export default CountriesList
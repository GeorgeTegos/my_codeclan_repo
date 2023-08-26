import React, { useEffect, useState } from 'react'
import CountriesList from '../components/CountriesList'
import Header from '../components/Header'
import FavoriteCountriesList from '../components/FavoriteCountriesList'
import FilterArea from '../components/FilterArea'

const CountriesContainer = () => {
    const [countries,setCountries] = useState([])
    const [favoriteCountries,setFavoriteCountries] = useState([])
    const [country,setCountry] = useState(null)


    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then((res) => res.json())
        .then((data)=> setCountries(data))
    },[])
    

  return (
        <>
        {/* HEADER */}
        <div className='header'>
        <Header country={country} countries={countries} /> 
        </div>
        {/* Filters Area */}
        <div className='main-wrapper'>
            <div className='left-side-box'>
                <FilterArea />
                {/* Favorite Countries Section */}
                <FavoriteCountriesList favoriteCountries={favoriteCountries}/>
            </div>
            {/* output section */}
            <CountriesList 
                country={country} 
                setCountry={setCountry} 
                countries={countries}
                favoriteCountries={favoriteCountries}
                setFavoriteCountries={setFavoriteCountries}
                />    
        </div>
        </>
    )
}

export default CountriesContainer
import React, { useEffect, useState } from 'react'
import TotalPopulation from '../components/TotalPopulation'
import CountriesList from '../components/CountriesList'

const CountriesContainer = () => {
    const [countries,setCountries] = useState([])
    const [country,setCountry] = useState(null)


    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then((res) => res.json())
        .then((data)=> setCountries(data))
    },[])
    

  return (
        <>
        {country == null &&  <TotalPopulation countries={countries}/>}
        <br />
        <CountriesList country={country} setCountry={setCountry} countries={countries}/>    
        </>
    )
}

export default CountriesContainer
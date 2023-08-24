import React from 'react'

function TotalPopulation({countries}) {
  return (
    <div> 
        The total Population of {countries.length} countries is: 
        {countries
        .map((country)=> country.population)
        .reduce((accumulator, currentValue)=> accumulator + currentValue ,0)}
    </div>
  )
}

export default TotalPopulation
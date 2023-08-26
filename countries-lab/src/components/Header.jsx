import React from 'react'
import TotalPopulation from './TotalPopulation'

function Header({country, countries}) {
  return (
    <div className='header-wrapper'>
       <div className='total-population'> {country == null &&  <TotalPopulation countries={countries}/>}</div>

    </div>
  )
}

export default Header
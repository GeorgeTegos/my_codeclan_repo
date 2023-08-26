import React from 'react'

function FavoriteCountriesList({favoriteCountries}) {
  return (
    <div className='favorite-countries-list-wrapper'>
        <ul className='favorite-countries-list'>
            {favoriteCountries.map((country, index) => 
            <li className='favorite-countries-list-item' key={index}>{country.name.common}</li>)}
        </ul>

    </div>
  )
}

export default FavoriteCountriesList
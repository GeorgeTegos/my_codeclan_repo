import React from 'react'


 function FilterArea({countries, filteredData, setFilteredData}) {
 
  const allContinents = countries.map(country=> country.continents[0])
  const uniqueContinents = allContinents.filter((currentValue, index, array)=>array.indexOf(currentValue)=== index)

  {filteredData.length ==0 && setFilteredData([...countries])}
  
  return (
  <>
    <div className='filter-area-wrapper'>
      <label htmlFor="continents-select">Search by Continent</label><br />
      <select onChange={(e) => setFilteredData([...countries
        .map((eachContinent) => eachContinent)
        .filter(cv => cv.continents[0] == e.target.value)])}>
      
      <option >All</option>
     
      {uniqueContinents.map((continent, index) => 
        <option value={continent} key={index}>{continent}
        </option>)}
      </select>  

    </div>
  
  </>
  )
}

export default FilterArea
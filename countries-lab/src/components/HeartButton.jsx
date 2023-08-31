import React, {useState} from "react";
import Heart from "react-heart"

function HeartButton({active,setActive,setFavoriteCountries,country,favoriteCountries}) {
  return (
    <>
    {active != true
    ?
      <Heart isActive={active} onClick={() =>{ 
      setFavoriteCountries([...favoriteCountries,country])
      setActive(!active)}}
      animationTrigger = "both" 
      inactiveColor = "rgba(255,125,125,.75)" 
      activeColor = "#e019ae" 
      animationDuration = {0.1}
      style={{width:"2rem"}}/>   
    : 
    <Heart isActive={active} onClick={() =>{ 
      setFavoriteCountries([...favoriteCountries.filter((countryToRemove)=> countryToRemove !== country)])
      setActive(!active)}}
      animationTrigger = "both" 
      inactiveColor = "rgba(255,125,125,.75)" 
      activeColor = "#e019ae" 
      animationDuration = {0.1}
      style={{width:"2rem"}}/> 
    }   
  
  </>
  );
  }
  export default HeartButton
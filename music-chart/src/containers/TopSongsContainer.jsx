import { useState, useEffect } from "react"

function TopSongsContainer() {
    const [data,setData] = useState([])
    const [songsList,setSongsList] = useState([])
    const [moreSongsInfo,setMoreSongsInfo] = useState([])
    const [genreSelect,setGenreSelect]= useState("")
    const [genres,setGenres]= useState([])


    useEffect( () =>{
        fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
        .then((res)=> res.json())
        .then((data) => {
            const array = data.feed.entry
            setData(array)
        })
    }, [] )

    const showSongs = () => {
        setMoreSongsInfo([])
        setSongsList(data.map((song, index)=> 
        <li key={index} className="song-list-item">{song.title.label}</li>))
    }

    const showMoreSongsInfo = () =>{
        setSongsList([])
        setMoreSongsInfo(data.map((song, index)=>{
            const { "im:name":name, "im:artist":artist , category, "im:image":image} = song
            return (
            <li key={index} className="more-info-list-item"> 
                Song: {name.label} <br /> 
                Artist: {artist.label} <br /> 
                Category: {category.attributes.term} <br />
                <img src={image[0].label} alt="" />
                
            </li>
            )
        } ))
    }

    const genresArray = () =>{
        setGenres(
            data.map((genre) => {
            const { category } = genre
            return category.attributes.term})
            .filter((eachGenre,pos,array)=> 
            array.indexOf(eachGenre) == pos)
            )
        }
        

   


  return (
    <>   
        
        <button onClick={showSongs}>Show Top 20 Songs</button>
        <button onClick={showMoreSongsInfo}> More Infos </button>
        <button onClick={genresArray}>Genres</button>
       
 
        <ol>
            {songsList}
            {moreSongsInfo}
        <label htmlFor="genres">
        <select>
            {genres.map((genre,index)=> {
                return (
                <option key={index}> {genre} </option>)
                })}
        </select>
        </label>
            
        </ol>

    </>

)
}

export default TopSongsContainer
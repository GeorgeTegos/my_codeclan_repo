import { useState, useEffect } from "react";

function TopSongsContainer() {
    const [data, setData] = useState([]);
    const [songsList, setSongsList] = useState([]);
    const [moreSongsInfo, setMoreSongsInfo] = useState([]);
    const [genreSelect, setGenreSelect] = useState("");
    const [genresOptions,setGenresOptions] = useState("")
    const [genres, setGenres] = useState([
        {name: "All", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"},
        {name: "Rock", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=21/json"},
        {name: "Dance", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=17/json"},
        {name: "Country", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=6/json"}
    ]);

    
    useEffect(() => {
        fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
        .then((res) => res.json())
        .then((data) => {
            const array = data.feed.entry
            setData(array)
            setGenresOptions(genres.map((item,index) => <option key={index}>{item.name}</option>))
        })
    }, []);

    useEffect(() => async () => {
        
        console.log(genreSelect)
        let promise
        {genreSelect == "All"? promise = fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json"):
        genreSelect == "Rock" ? promise = fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=21/json"):
        genreSelect == "Dance" ? promise = fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=17/json"):
        genreSelect == "Country" ? promise = fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=6/json"):
        console.log("Error here")
        }
        promise.then((res)=> res.json())
        .then((data)=>{
            const array = data.feed.entry
            setData(array)
        })

    }, [genreSelect]);

    const showSongs = () => {
        setMoreSongsInfo([]);
        setSongsList(data.map((song, index) => (
            <li key={index} className="song-list-item">{song.title.label}</li>
        )));
    };

    const showMoreSongsInfo = () => {
        setSongsList([]);
        setMoreSongsInfo(data.map((song, index) => {
            const { "im:name": name, "im:artist": artist, category, "im:image": image } = song;
            return (
                <li key={index} className="more-info-list-item">
                    Song: {name.label} <br />
                    Artist: {artist.label} <br />
                    Category: {category.attributes.term} <br />
                    <img src={image[0].label} alt="" />
                </li>
            );
        }));
    };  

    



    return (
        <>   
            <button onClick={showSongs}>Show Top 20 Songs</button>
            <button onClick={showMoreSongsInfo}> More Infos </button>

            <label htmlFor="genre">Change Genre
            <select onChange={(e)=> setGenreSelect(e.target.value)}>
               {genresOptions}
            </select>
            </label> 

            <ol>
                {songsList}
                {moreSongsInfo}
            </ol>



        </>
    );
}

export default TopSongsContainer;

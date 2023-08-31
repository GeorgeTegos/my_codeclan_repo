GameForm.js 
    -> createGame(game)  (From handle submit)

GameContainer.js
    -> createGame
        ->GamesService.postGame(newGame) 
        
GameServices.js
    -> GamesService.postGame (POST method)
        (fetching baseURL = our localhost API address)
        We then send our Request configuration
        with method POST , we take back a promise
        and .then we convert it back to JS
            ->.then we have our savedGame and setGames([...games, savedGame])
            so we can render the latest game aswell

create_router.js 
router.post('/') 
    -> newData = our returned JSON (red.body)
    insert our newData to our collection 
        -> collection.insertOne(newData) 
        (//db.collection.insertOne(data))
        .then we return the we send back
        the inserted document as a response to
        client that made the request


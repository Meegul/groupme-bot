exports.process = (text, isBot) => {
    const toSearchFor = "@giphy ";
    const index = text.toLowerCase().indexOf(toSearchFor);

    //If we found the string we're looking for get results and send them
    if (index != -1) {
        //Get the string we are searching for.
        const toSearch = text.substring(index + toSearchFor.length);
        
        //Get the total, encoded URL we're going to pass to Giphy to search
        const giphyurl = `http://api.giphy.com/v1/gifs/search?limit=5&
            q=${encodeURIComponent(toSearch)}&api_key=dc6zaTOxFJmzC`;
        
        //Get the giphy result, and send it, if found
        request.get(giphyurl, (error, response, body) => {
            const results = JSON.parse(body)["data"];
            //Get up to the top five
            const numTopResults = (results.length < 5) ? results.length : 5;
            if (error || numTopResults === 0) {
                sendMessage(botID, "Nothing found 😥");
            } else {
                const indexSelected = Math.floor(Math.random() * (numTopResults));
                const selected = results[indexSelected].images.original.url;
                console.log(`${toSearch}=>${selected}`);
                sendMessage(botID, selected);
            }
        });
    }
};
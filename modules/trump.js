let heightOfWall = 0;
const trumpChinaQuotes = ["We can’t continue to allow China to rape our country",
    "Listen, you motherfuckers, we’re going to tax you 25 percent!",
    "They are taking our jobs. China is taking our jobs. It is not going to happen anymore, folks!",
    "We’ve gone from a tremendous power that is respected all over the world to somewhat of a laughing stock and all of a sudden, people are talking about China and India and other places. That was the beginning of China.",
    "You have to bring in jobs, you have to take the jobs back from China, you have to take the jobs back from Mexico."];

const dict = new Map();
dict.set("aids", "You may get AIDS by kissing.");
dict.set("beauty", "Part of the beauty of me is that I am very rich.");
dict.set("blacks", ["I have a great relationship with the blacks", "Did you know my name is in more black songs than any other name in hip-hop? Black entertainers love Donald Trump. Russell Simmons told me that."]);
dict.set("bing", "Bing bing, bong bong, bing bing bing.");
dict.set("china", trumpChinaQuotes);
dict.set("coke", "I have never seen a thin person drinking Diet Coke.");
dict.set("daughter", "https://i.redd.it/y0mscagubhdx.jpg");
dict.set("global warming", ["Believe me, the concept of global warming was created by and for the Chinese in order to make U.S. manufacturing non-competitive.", "It's freezing and snowing in New York - we need global warming!"]);
dict.set(["hillary", "clinton"], ["Crooked Hillary is a disgrace. Sad!", "CROOKED HILLARY"]);
dict.set("immigrant", "They're not sending their best. They're bringing drugs, they're bringing crime, they're rapists... And some, I assume, are good people.");
dict.set("iowa", "How stupid are the people of Iowa?");
dict.set("japanese", "I have tremendous respect for the Japanese people, I mean, you can respect somebody that’s beating the hell out of you.");
dict.set("jeb", ["Excuse me, JEB!", "Please clap."]);
dict.set("kick", "We got some BAD HOMBRES. OUT, OUT, OUT!");
dict.set("lightbulb", "The boob job is terrible. They look like two lightbulbs coming out of her body.");
dict.set("marco", "Don't worry about it, Little Marco.");
dict.set("mexico", ["When are we going to beat Mexico at the border? They're laughing at us.", "They're bringing drugs. They're bringing crime. They're rapists..."]);
dict.set("muslim", "Donald J. Trump is calling for a total and complete shutdown of Muslims entering the United States until our country's representatives can figure out what the hell is going on.");
dict.set("rug", "I don’t wear a ‘rug’—it’s mine. And I promise not to talk about your massive plastic surgeries that didn’t work.");
dict.set("sad", "SAD!");
dict.set("shoot", "I could stand in the middle of 5th Avenue and shoot somebody and I wouldn't lose voters.");
dict.set("suspense", "I'll keep you in suspense.");
dict.set(["ted", "lying"], ["Lyin' Ted would have been a total DISASTER.", "Lyin' Ted is a complete and total failure."]);
dict.set("who do we have", "We got some BAD HOMBRES. OUT, OUT, OUT!");
dict.set("woman", ["You know, it doesn’t really matter what the media writes as long as you’ve got a young and beautiful piece of ass."]);
dict.set("viagra", "With the proper woman, you don't need Viagra.");
dict.set("vietnam", "It is a dangerous world out there — it’s scary, like Vietnam. Sort of like the Vietnam era. It is my personal Vietnam. I feel like a great and very brave soldier.");
dict.set("Bible", "He walks in with the bible high, he puts it down, and then he lies!!! Lyin' Ted everyone!");
dict.set(["IQ", "smart", "stupid"], "My IQ is one of the highest- and you all know it!");
dict.set(["global", "globalism"], "We will no longer surrender this country to the false song of globalism");
dict.set(["carson","doctor","sleepy"], "The sleepy doctor has awoken!");
dict.set("anal", "No, I'm not into anal.");
dict.set(["birth", "certificate"], "There is something on that birth certificate- or, he may not have one");
dict.set("asian", "Bing bing. bong bong. bing bing bing");
dict.set("refugee", "Fuck em all to death!!!");

exports.process = (message, bot) => {
    if (!message.is_bot) {
        const buildTheWall = "the wall";
        const wallIndex = message.text.toLowerCase().indexOf(buildTheWall);
        if (wallIndex != -1) {
            heightOfWall += 10;
            bot.sendMessage(`The wall just got 10ft higher. It's now ${heightOfWall}ft high.`);
        }
        for (const [key, value] of dict) {
            let index = -1;
            let inputKeys;
            if (!Array.isArray(key)) {
                inputKeys = [key];
            } else {
                inputKeys = key;
            }
            
            for (const item of inputKeys) {
                if (!item.includes(" ")) {
                    index = message.text.toLowerCase().split(/[\W\d]+/).indexOf(item.toLowerCase());
                } else {
                    index = message.text.toLowerCase().indexOf(item.toLowerCase());
                }
                
                if (index != -1) {
                    break;
                }
            }
            
            if (index != -1) {
                if (typeof(value) === "string") {
                    bot.sendMessage(value);
                } else if (Array.isArray(value)) {
                    bot.sendMessage(value[Math.floor(Math.random() * (value.length))]);
                } else {
                    console.log("Type error encountered while parsing value.");
                }
            }
        }
    }
};

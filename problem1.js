const { assert } = require("console");
const fs = require("fs");



    fs.readFile("./movies.json","utf8", function(err, data) {
        if(err){
            console.log("err");
        }
        else {
            console.log("successfull");
            let parsedData = JSON.parse(data);
                console.log(moviesperGenre(parsedData));
            }
        console.log(data);
    });

     function moviesperGenre(data){
        if(!data){
            return [];
        }
        const result = data.reduce((acc, eachElement)=>{
            if(!acc[eachElement["Genre"]]){
                acc[eachElement["Genre"]] = [];
                }
            acc[eachElement["Genre"]].push(eachElement["Title"]);
            return acc;
            
        },{});
        return result;
        

    } 




    
    


    


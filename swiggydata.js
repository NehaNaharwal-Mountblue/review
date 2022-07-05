const csvTojson = require('csvtojson');
const fs =  require("fs");
csvTojson().fromFile("./Swiggy_dataset.csv")
.then((data)=>{
    //console.log(data);
    fs.writeFile("./swiggy.json",JSON.stringify(data), function(err,data){
        if(err){
            console.log(err);
        }
        else{
            console.log("data");
        }
    })
})
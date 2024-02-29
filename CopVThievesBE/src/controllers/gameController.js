const gameModel = require("../models/Game")
const vehicleController = require("./vehicleController")

const simulateThiefLocation = () =>{
    const cities = require("../../data/cities.json")
    const randomNum = Math.floor(Math.random() * cities.length)
    const thiefLocation = cities[randomNum]
    gameModel.setThiefLocation(thiefLocation)
    return thiefLocation.name

}
/**{ 
 *  name:cop1,
 *  city:cityname,
 *  vehicle:true
 * 
 * } */
const checkCaptureState = (req, res) =>{
    let success = false;
    const thiefLocation = simulateThiefLocation()
    let capturedBy = ""
    console.log(thiefLocation)
    for(var i=0; i < req.body.length; i++){
        if (req.body[i].city === thiefLocation){
            capturedBy = req.body[i].name
            success = true;
        }
        console.log(req.body[i].city, thiefLocation)
    }
    
    if (capturedBy != ""){
        res.json({success, message : `Thief is captured by ${capturedBy} and at ${thiefLocation}`})
    }else{
        res.json({success, message : `Thief is not captured yet`})
    }

}

module.exports = {checkCaptureState, simulateThiefLocation}
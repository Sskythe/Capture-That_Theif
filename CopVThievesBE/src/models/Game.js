let thiefLocation = null;

const setThiefLocation = (location) =>{
    thiefLocation = location
}

const getThiefLocation = () =>{
    return thiefLocation
}

module.exports = {setThiefLocation, getThiefLocation}

const cities = require("../../data/cities.json")

const getCities = (req, res) =>{
    res.json(cities);
}

module.exports = {getCities};
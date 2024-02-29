const vehiclesData = require("../../data/vehicles.json");
const citiesData = require("../../data/cities.json");

const getVehicles = (req, res) => {
    try {
        res.json(vehiclesData);
    } catch (error) {
        console.error("Error retrieving vehicles:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

const getVehicleStatus = async (req, res) => {
    const { city, selectedVehicle } = req.body;
    try {
        const vehicle = vehiclesData.find(v => v.kind === selectedVehicle);
        if (!vehicle) {
            return res.status(404).json({ error: "Vehicle not found" });
        }
        if (vehicle.count <= 0) {
            return res.status(400).json({ error: "Vehicle not available" });
        }
        const findCity = citiesData.find(v => v.name === city);
        if (!findCity) {
            return res.status(404).json({ error: "City not found" });
        }
        if (findCity.distance * 2 > vehicle.range) {
            console.log(findCity.distance * 2, vehicle.range)
            return res.status(400).json({ error: "Cannot cover this much range" });
        }
        const idx = vehiclesData.indexOf(vehicle);
        vehiclesData[idx].count -= 1;
        res.json({ message: true });
    } catch (error) {
        console.error("Error retrieving vehicle status:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = { getVehicles, getVehicleStatus };

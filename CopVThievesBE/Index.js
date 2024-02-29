const express = require("express")
const bodyParser = require('body-parser');
const cityRoutes = require('./src/routes/cityRoute');
const vehicleRoutes = require('./src/routes/vehicleRoute');
const gameRoutes = require('./src/routes/gameRoute');
const cors = require('cors')
const app = express()


const PORT = process.env.PORT || 3000

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/cities', cityRoutes);
app.use('/vehicles', vehicleRoutes);
app.use('/game', gameRoutes);


app.listen(PORT, () =>{
    console.log(`server running on port ${PORT}`)
})
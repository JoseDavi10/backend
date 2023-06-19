const express= require('express');
const clienteRoutes = require("../src/api/clienteRoutes");
const config = require('./config/default');

const app = express();

app.use(express.json())
app.use(clienteRoutes)

const PORT = config.server.port
const HOST = config.server.host


const server = app.listen(PORT,HOST, (err) => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    console.log(`Server is running on ${HOST}:${server.address().port}`);
});

const app = require("./app");
const dotenv = require('dotenv');
const ip = require('ip');

dotenv.config();


const port = getServerPort();

app.listen(port);
console.log("Server running on port: " + port);

function getServerPort() {
    const serverIp = ip.address();

    if (serverIp === '192.168.6.138') {
        return process.env.PORT_TEST || 4000;
    } else if (serverIp === '192.168.6.139') {
        return process.env.PORT_PROD || 80;
    } else {
        return process.env.PORT || 3000;
    }
}

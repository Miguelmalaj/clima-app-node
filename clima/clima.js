const axios = require("axios");

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=a75cf2863196ded2c0116b57d478329c`);

    return resp.data.main.temp;
}

module.exports = {
    getClima: getClima
}
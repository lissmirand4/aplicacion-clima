const axios = require('axios');

const getClima = async(direccion) => {
    let encodedUrl = encodeURI(direccion);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedUrl }&key=AIzaSyDzbQ_553v-n8QNs2aafN9QaZbByTyM7gQ`)

    let location = resp.data.results[0];
    let coors = location.geometry.location;

    let resp_time = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${coors.lat}&lon=${coors.lng}&units=metric&appid=1a1cd58cd15b0ec74ac46cf5e6f046cc`)
    let temperatura = resp_time.data.main

    return {
        temp_minimo: temperatura.temp_min,
        temp_maximo: temperatura.temp_max
    }
}

const nuevoClima = async(lat, lng) => {
    let resp_time = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=1a1cd58cd15b0ec74ac46cf5e6f046cc`)
    let temperatura = resp_time.data.main

    return temperatura.temp_max;

}

module.exports = {
    getClima,
    nuevoClima
}
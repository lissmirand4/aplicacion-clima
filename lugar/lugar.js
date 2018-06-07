const axios = require('axios');


const getLugarLatLng = async(direccion) => {
    let encodedUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedUrl }&key=AIzaSyDzbQ_553v-n8QNs2aafN9QaZbByTyM7gQ`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${ direccion }`);
    }

    let location = resp.data.results[0];
    let coors = location.geometry.location;

    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }

}

module.exports = {
        getLugarLatLng
    }
    /*
    const axios = require('axios');

    const getLugarLatLng = async(direccion) => {

        let codeUrl = encodeURI(direccion);

        let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${codeUrl}&key=AIzaSyA4CcvV794bh_7jhzJbQydwlUgu-XJL_nE`)
        if (resp.data.status === 'ZERO_RESULTS') {
            throw new Error(`No hay resultados para la ciudad ${direccion}`);
        }
        let location = resp.data.results[0];
        let coors = location.geometry.location;

        return {
            direccion: location.formatted_address,
            lat: coors.lat,
            lng: coors.lng
        }
    }

    module.exports = {
        getLugarLatLng
    }
    */
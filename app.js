const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;
//console.log(`Direccion:${argv.direccion}`);
/*
lugar.getLugarLatLng(argv.direccion)
    .then(resp => {
        console.log(resp);
    })
    .catch(e => console.log(e));
------------------------------------------
*/
/*
clima.getClima(argv.direccion)
    .then(resp => {
        console.log(resp);
    })
    .catch(e => console.log(e));
*/
/*
let lat = '17.0542297';
let lng = '-96.7132304';
clima.nuevoClima(lat, lng)
    .then(temp => console.log(temp))
    .catch(e => console.log(e));
*/
let getInfo = async(direccion) => {
    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.nuevoClima(coors.lat, coors.lng);
        return `El clima en ${coors.direccion} es de ${temp}`
    } catch (e) {
        return `No se puede determinar el clima en ${direccion}`;
    }

}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));
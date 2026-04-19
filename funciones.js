//AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO
function calcularDisponible(ingresos, egresos){
    let disponible;
    disponible = ingresos -egresos;

    if(disponible < 0){
        return 0;
    }
    return disponible;
}

function calcularCapacidadPago(montoDisponible){
    let capacidad;
    capacidad = montoDisponible / 2;

    return capacidad;
}

function calcularInteresSimple(monto, tasa, plazoAnios){
    let interes;
    interes = plazoAnios * monto * (tasa/100);

    return interes;
}
 function calcularTotalPagar(monto, interes){
    let total;
    total= monto + interes + 100;

    return total;

 }
  

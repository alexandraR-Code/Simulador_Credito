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

function calcularCuotaMensual(total, plazoAnios){
    let meses = plazoAnios * 12;
    let cuota;
    cuota = total / meses;

    return cuota;
}
function aprobarCredito(capacidadPago, cuotaMensual){
    if (capacidadPago > cuotaMensual){
        return true;

    }else {
        return false;
    }

}
function validarCampo(idInput, idError) {
    let valor = document.getElementById(idInput).value;
    let error = document.getElementById(idError);

    error.textContent = "";

    // Campo vacío
    if (valor.trim() === "") {
        error.textContent = "Campo obligatorio";
        return false;
    }

    // Solo números
    if (!/^\d+$/.test(valor)) {
        error.textContent = "Solo se permiten números";
        return false;
    }

    // Máximo 5 dígitos
    if (valor.length > 5) {
        error.textContent = "Máximo 5 dígitos";
        return false;
    }

    return true;
}
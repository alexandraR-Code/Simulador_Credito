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
function validarCampo(idInput, idError, mostrarError = true) {
    let valor = document.getElementById(idInput).value;
    let error = document.getElementById(idError);

    if (mostrarError) {
        error.textContent = "";
        error.classList.remove("activo");
    }

    // Campo vacío
    if (valor.trim() === "") {
        if (mostrarError) {
            error.textContent = "Campo obligatorio";
            error.classList.add("activo");
        }
        return false;
    }

    // Solo números
    if (!/^\d+$/.test(valor)) {
        if (mostrarError) {
            error.textContent = "Solo se permiten números";
            error.classList.add("activo");
        }
        return false;
    }

    // Máximo 5 dígitos
    if (valor.length > 5) {
        if (mostrarError) {
            error.textContent = "Máximo 5 dígitos";
            error.classList.add("activo");
        }
        return false;
    }

    return true;
}
function validarFormulario() {
    let v1 = validarCampo('txtIngresos','errorIngresos', false);
    let v2 = validarCampo('txtEgresos','errorEgresos', false);
    let v3 = validarCampo('txtMonto','errorMonto', false);
    let v4 = validarCampo('txtPlazo','errorPlazo', false);
    let v5 = validarCampo('txtTasaInteres','errorTasa', false);

    let esValido = v1 && v2 && v3 && v4 && v5;

    document.getElementById("btnCalcularCredito").disabled = !esValido;

    return esValido;
}
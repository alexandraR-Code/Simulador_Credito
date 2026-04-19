//AQUI EL JAVASCRT PARA MANIPULAR EL HTML
function calcular(){

    // Leer ingreso y sgreso (float)
    let ingresos = parseFloat(document.getElementById("txtIngresos").value);
    let egresos = parseFloat(document.getElementById("txtEgresos").value);

    //Llamar a la funcion calcularDisponible
    let disponible = calcularDisponible(ingresos, egresos);

    //Mostrar en pantalla el componente lblDisponibleValor
    document.getElementById("spnDisponible").innerText= "USD " + disponible.toFixed(2);

    //Llamar a la funcion calcularCapacidad y guardar 
    let capacidadPago = calcularCapacidadPago(disponible);

    //Mostrar en pantalla e;l componente lblCapacidadPago
    document.getElementById("spnCapacidadPago").innerText = "USD " + capacidadPago.toFixed(2);

    //leer los valores monto, plazoAnios, tasa como enteros
    let monto = parseInt(document.getElementById("txtMonto").value);
    let plazoAnios = parseInt(document.getElementById("txtPlazo").value);
    let tasa =parseInt(document.getElementById("txtTasaInteres").value);

    //Llamar a la funcion calcularInteresSimple
    let valorInteres = calcularInteresSimple(monto, tasa, plazoAnios);

    //mostrar en pantalla en componente lblInteresValor
    document.getElementById("spnInteresPagar").innerText =  "USD " + valorInteres.toFixed(2);

    //Invocar a calcularTotalPagar
    let totalPagar = calcularTotalPagar(monto, valorInteres);

    //Mostrar en  pantalla en el componente lblTotalValor
    
    document.getElementById("spnTotalPrestamo").innerText =  "USD " + totalPagar.toFixed(2);

    //Invoca a calcularaMensual
    let cuota = calcularCuotaMensual(totalPagar, plazoAnios);

    //Mostrar en pantalla lblCuotaMensual

    document.getElementById("spnCuotaMensual").innerText =  "USD " + cuota.toFixed(2);

    //Invocar a analizarcredito y guardar el resultado en una variable
    let aprobado = aprobarCredito(capacidadPago, cuota);

    //Mostar en pantalla el estado del cfedito 
    if (aprobado){
        document.getElementById("spnEstadoCredito").innerText = "CREDITO APROBADO";

    }else{
        document.getElementById("spnEstadoCredito").innerText = "CREDITO RECHAZADO"
    }


}

//AQUI EL JAVASCRT PARA MANIPULAR EL HTML
function calcular(){

    // Leer ingreso y sgreso (float)
    let ingresos = parseFloat(document.getElementById("txtIngresos").value);
    let egresos = parseFloat(document.getElementById("txtEgresos").value);

    //Llamar a la funcion calcularDisponible
    let disponible = calcularDisponible(ingresos, egresos);

    //Mostrar en pantalla el componente lblDisponibleValor
    document.getElementById("spnDisponible").innerText= "USD " + disponible.toFixed(2);
}
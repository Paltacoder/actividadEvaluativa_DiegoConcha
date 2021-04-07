var formulario = document.getElementById("formulario");
var nombres = document.getElementById("nombres");
var apellidos = document.getElementById("apellidos");
var rut = document.getElementById("rut");
var correoElectronico = document.getElementById("correoElectronico");
var telefono = document.getElementById("telefono");
var mensaje = document.getElementById("mensaje");
var nivelConocimiento = document.getElementById("nivelConocimiento");
var descripcion = document.getElementById("descripcion");
//Validaciones
// function validarTelefono(){
//     let telefonoValue:string = telefono.value;     
//     if(telefonoValue.length > 9){
//         let errorTelefono = document.getElementById("msjErrorTelefono");
//         if(errorTelefono == null){
//             errorTelefono = document.createElement("h4");
//         }
//         errorTelefono.id = "msjErrorTelefono"
//         errorTelefono.innerHTML = "Error, el telefono no puede contener mas de 9 digitos";        
//     }
//     else{
//         let errorTelefono = document.getElementById("msjErrorTelefono");
//         if(errorTelefono != null){
//             errorTelefono.remove();
//         }        
//     }
// }
// function validarTelefono(){
//     let telefonoValue:string = telefono.value;
//     if (! /^[0-9]{9}$/.test(telefonoValue)) {
//         alert("Ingrese numero de 9 digitos");
//         return true;
//     }
// }
// function validarTelefono(){
//     let telefonoValue:string = telefono.value;
//     telefono.value.regex( '^[0-9]{10}$')
// }
/////////////////////////////////////////////////////////////////
// if(telefono.value != null){
//     validarTelefono();
// }
formulario.addEventListener("submit", function (evento) {
    // console.log(nombres.value);
    // console.log(apellidos.value);
    // console.log(rut.value);
    // console.log(correoElectronico.value);
    // console.log(telefono.value);
    formulario.style.display = "none";
    mensaje.style.display = "block";
    mensaje.innerHTML = "Hemos recibido sus datos, pronto nos estaremos comunicando con usted!";
    mensaje.style.color = "#ff0000";
    evento.preventDefault();
});
//limpia checkboxes de lenguajes
var languagesChecklist = document.getElementsByName("languages");
function cleanChecklist() {
    for (var i = 0; i < languagesChecklist.length; i++) {
        languagesChecklist[i].checked = false;
    }
}
//limpia radio inputs
var radioInputs = document.getElementsByName("radio");
function cleanRadioInputs() {
    for (var i = 0; i < radioInputs.length; i++) {
        radioInputs[i].checked = false;
    }
}
function cleanData() {
    //limpia todo menos checklist y radio
    nombres.value = "";
    apellidos.value = "";
    rut.value = "";
    correoElectronico.value = "";
    telefono.value = "";
    nivelConocimiento.value = "";
    descripcion.value = "";
    //limpia checkboxes de lenguajes
    cleanChecklist();
    //limpia radio inputs
    cleanRadioInputs();
}
var cleanButton = document.getElementById("cleanButton");
cleanButton.onclick = function (evento) {
    cleanData();
    evento.preventDefault();
};

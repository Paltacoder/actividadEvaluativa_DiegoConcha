let formulario=document.getElementById("formulario");

let nombres:any=document.getElementById("nombres");
let apellidos:any=document.getElementById("apellidos");
let rut:any=document.getElementById("rut");
let correoElectronico:any=document.getElementById("correoElectronico");
let telefono:any=document.getElementById("telefono");
let mensaje:any=document.getElementById("mensaje");
let nivelConocimiento:any=document.getElementById("nivelConocimiento");
let descripcion:any=document.getElementById("descripcion");


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


formulario.addEventListener("submit", function(evento){
    // console.log(nombres.value);
    // console.log(apellidos.value);
    // console.log(rut.value);
    // console.log(correoElectronico.value);
    // console.log(telefono.value);

    formulario.style.display="none";
    mensaje.style.display="block";
    mensaje.innerHTML="Hemos recibido sus datos, pronto nos estaremos comunicando con usted!";
    mensaje.style.color="#ff0000";

    evento.preventDefault();
    
});

//limpia checkboxes de lenguajes
let languagesChecklist:any=document.getElementsByName("languages");
function cleanChecklist(){
    for(let i:number = 0; i < languagesChecklist.length; i++){
        languagesChecklist[i].checked = false;
    }
}

//limpia radio inputs
let radioInputs:any=document.getElementsByName("radio");
function cleanRadioInputs(){
    for(let i:number = 0; i < radioInputs.length; i++){
        radioInputs[i].checked = false;
    }
}

function cleanData(){ 
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


let cleanButton:any=document.getElementById("cleanButton");

cleanButton.onclick = function(evento){
    cleanData();
    evento.preventDefault();
};
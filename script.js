

const inputturno = document.getElementById("turno");
const inputhoras = document.getElementById("horas");
const inputpagoxhora = document.getElementById("pagoxhora");
const outputsueldo = document.getElementById("sueldo");
const btncalcular = document.getElementById("btncalcular")
const btnlimpiar = document.getElementById("btnlimpiar")

btnlimpiar.addEventListener("click", (e) => {
    e.preventDefault();

    inputturno.value = "matutino";
    inputhoras.value = "";
    inputpagoxhora.value = "";
    outputsueldo.value = "";

});


btncalcular.addEventListener("click", (e) => {
    e.preventDefault();

    let turno = inputturno.value;
    let horas = Number(inputhoras.value);
    let pagoxhora = Number(inputpagoxhora.value);

    let sueldo = horas * pagoxhora;
    console.log(turno);

    if(turno === "vespertino") {
       sueldo= sueldo + (sueldo * 0.03);
       console.log("entro al turno vespertino:",sueldo)    
    }
    else if (turno === "nocturno") {
       sueldo= sueldo + (sueldo * 1.0);
    }

    outputsueldo.value = sueldo.toFixed(2);
        
});

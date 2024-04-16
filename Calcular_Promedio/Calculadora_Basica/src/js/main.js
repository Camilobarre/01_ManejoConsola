let notas=[]

let nota1=parsefloat(prompt("Ingresa primera nota:"))
let nota2=parsefloat(prompt("Ingresa segunda nota:"))
let nota3=parsefloat(prompt("Ingresa tercera nota:"))
let nota4=parsefloat(prompt("Ingresa cuarta nota:"))
let nota5=parsefloat(prompt("Ingresa quinta nota:"))

notas.push(nota1,nota2,nota3,nota4,nota5)

let totalNotas= 0;
for (let i=0; i<notas.length; i++){
    totalNotas+=notas[i];
}

let promedio= totalNotas / notas.length;

if (promediopromedio<3.0){
    console.log("Tu promedio es de: "+promedio+". "+"Aprobaste");
} else { 
    console.log("Tu promedio es de: "+ promedio +". "+ "No aprobaste");
}

let frutas=["limón", "naranja", "lima", "pomelo", "mandarina","manzana", "plátano", "uva", "pera", "sandía"]

let frutasCitricas=[]
let frutasNoCitricas=[]

frutas.forEach(frutas => {
    if (frutas=["limón", "naranja", "lima", "pomelo", "mandarina"].includes(frutas)) {
        frutasCitricas.push(frutas);
    } else {
        frutasNoCitricas.push(frutas);
    }
});

console.log("\nFrutas cítricas:");
console.table(frutasCitricas);

console.log("\nFrutas no cítricas:");
console.table(frutasNoCitricas);

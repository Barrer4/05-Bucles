let valor = window.prompt(`Por favor, introduce el tipo de valor que deseas:
P - Pares
I - Impares`).substring(0,1).toUpperCase()


if(valor === "P"){
    for(let i = 1; i <= 100; i++){
        if(i%2 === 0){
        console.log(i)
        }
}
}

if(valor === "I"){
    for(let i = 1; i <= 100; i++){
        if(i%2 !== 0){
        console.log(i)
        }
}
}
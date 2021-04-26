const arr = [1, 4, 10, "ola", true];

let soNumeros = arr.some(function(el){
   
    return typeof el > 20;
});

arrFiltrada = arr.filter(function(el, i, _arr){
    return typeof el === "number"
})

arrMap = arrFiltrada.map(function(el, i, _arr){
    return el * el;
});
console.log(arrFiltrada);
console.log(arrMap);

const arrNum =[ 2,5,6,4,677,54,5,1];

console.log(arrNum.includes(50));

console.log(arrNum.indexOf(53) >-1 );

console.log(arrNum.findIndex(function(el){
    return el >10;
}) );

function sum(){
    let resultado = 0;
    for(let prop in arguments){
        resultado = resultado + arguments[prop] ;
    }
    return resultado
}

function average(){
    let resultado = 0;
    for(let prop in arguments){
        resultado = resultado + arguments[prop] ;
    }
    return resultado/arguments.length
}

console.log(sum(1,2,3,5))
console.log(average(1,2,3,5))

function sumResolvido(){
   //const numbers = Array.from(arguments);
   const numbers = [...arguments];
   return numbers.reduce((sum, atual) => sum+atual);
}

function averageResolvido(){
   return sum(...arguments) / arguments.length;
}

console.log(sumResolvido(1,2,3,4,5));
console.log(averageResolvido(1,2,3,4,5));



function sumAntigo(){
    const arr = [];
    // for(let i = 0; i <arguments.length; i++){
    //     arr.push(arguments[i]);
    // }

    Array.prototype.forEach.call(arguments, function(arguments){ 
        arr.push(arguments)
    })
    return arr.reduce((sum, atual) => sum+atual);
 }
 
 function averageAntigo(){
    const soma = sum.apply(null, arguments);
    return soma / arguments.length;
 }

 console.log(sumAntigo(1,2,3,4,5));
console.log(averageAntigo(1,2,3,4,5));
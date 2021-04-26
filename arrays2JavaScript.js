const arr1 = [ 1,2,3,4];
const arr2 = [5,6,7];

console.log(arr1.toString());
console.log(arr1.join(" - "));

let arr3 = arr1.concat(arr2);

console.log(arr3);

arr4 = arr1.reduce(function(acumulador, atual){
    return acumulador + atual;
}, 0)

console.log(arr4);

const nomes = ["Daniel", "Maria", "Joana", "João"];

console.log(nomes)

let nomesPorOrdem = nomes.reduce(function(nomes, nomeAtual){
    let primeiraLetra = nomeAtual[0];
    if(nomes[primeiraLetra]){
        nomes[primeiraLetra]++
    }else{
        nomes[primeiraLetra] = 1
    }

    return nomes;
}, {})
    
let nome = {n: 1};
let procurar = ["k"];
if(nome[procurar]){
    nome[procurar]++
    console.log(nome)
}else{
    nome[procurar] =1;
    console.log(nome)
}

console.log(nomesPorOrdem)

const numeros = [1, 3, 4, 1, 4, 5, 3, 5, 8, 9];
const numm = 2;
console.log(numeros.find(el => el == numm));

let numerosUnicos = numeros.reduce(function(num, numAtual, index){
    if( num.find(el => el == numAtual) == undefined){
        num.push(numAtual);
    }
    return num;
},[])

let numerosUnicosResolvido = numeros.reduce(function(num, numAtual, index){
    if( num.indexOf(numAtual) < 0){
        num.push(numAtual);
    }
    return num;
},[])

console.log(numeros);
console.log(numerosUnicos);
console.log(numerosUnicosResolvido);
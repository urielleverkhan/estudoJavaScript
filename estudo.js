// console.log("JavaROdando");

// function sum(n1, n2){
//     if(typeof n1 !== "number" || typeof n2 !== "number"){
//         throw Error("sum aceita apenas numeros");
//     }
//     return n1 + n2;
// }
// let soma;

// try{
//     soma = sum(4,"e");
// }catch(e){
//     console.log ("DEU UM ERRO VEI ::: " + e);
// }



// x = 10
// function umaVariavel(){
//     let x=20;
//     console.log(x)
// }
// umaVariavel();
// console.log(x)


// function soma(){
//     let total = 0;
//     console.log(arguments);
//     for(let  i = 0; i< arguments.length; i++){
//         total += arguments[i];
//     }
//     return total
// }

// console.log(soma(4,3,4,5,6))

function fn(cb){
    console.log("executar acao de callback");
    console.log(typeof cb);
    typeof cb === "function" && cb("nossa veiw");
}
v
const arr = [1,2,3];

const obj = {
    nome: "Maria",
    idade: 28,
    email: "m@m.com"
}

for(let prop in obj){
    console.log(`${prop}: ${obj[prop]}`);
  
}

for(n of arr){
    console.log(n);
}
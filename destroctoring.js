const arr = [11,22,33];


const [n1, n2] = arr;
const [m1, ...m2] = arr;
const [p1, ,p2] = arr;

console.log(n1);
console.log(n2);
console.log(m1);
console.log(m2);
console.log(p1);
console.log(p2);

console.log(arr);

let obj =  new Object({id: 2, nome:"Naira"});
let arr2 = new Array(1,2,3);

console.log(obj.nome)
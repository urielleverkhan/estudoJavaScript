const arr =[1,2,3];

sum(...arr);

function sum(){
    console.log(arguments);
    console.log(arguments.length);
}
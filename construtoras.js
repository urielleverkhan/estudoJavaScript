

function Task(name){
    "use strict"
    let _name = name;

    this.createdAt = new Date();
    this.updatadeAt = null;
    this.changeName = function(newName){
        _name = newName;
        this.updatadeAt = new Date();
    }
    this.getName = function(){
        return _name;
    }

}

const task1 =  new Task("task 1");

console.log(task1)

const task2 =  new Task("task 2");
console.log(task2)

task1.changeName("novo nome")


console.log(task1)

console.log(task1.getName())
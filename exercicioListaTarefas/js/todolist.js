;(function(){
    "use strict"

    //armasenar o dom em varieveis
    const itemInput = document.getElementById("item-input");
    const addItemBtn = document.getElementById("add-item");
    const todoAddForm = document.getElementById("todo-add");
    const ul = document.getElementById("todo-list");
    const lis = ul.getElementsByTagName("li");

    let arrTasks = getSavedData() 


    function getSavedData(){
        let tasksData = localStorage.getItem("tasks");
        console.log(tasksData)
        tasksData = JSON.parse(tasksData);
        console.log(tasksData);

        return tasksData && tasksData.length ? tasksData : [
            {
                name: "task 1",
                createdAt: Date.now(),
                completada: false
            },
            {
                name: "task 2",
                createdAt: Date.now(),
                completada: true
            }
        ]
    }

    function setNewData(){
        localStorage.setItem("tasks", JSON.stringify(arrTasks));
    }
    setNewData();
    // function addEventLi(li){
    //     li.addEventListener("click", function(e){
    //         console.log(this);
    //     });
    // }

    function generateLiTasck(obj){
        const li = document.createElement("li");
        const p = document.createElement("p");
        const checkButton = document.createElement("button");
        const editButton = document.createElement("i");
        const deleteButton = document.createElement("i");

        li.className = "todo-item";

        checkButton.className = "button-check";
        checkButton.innerHTML = `<i class="fas fa-check ${obj.completada ? "": "displayNone"}" data-action="checkButton"></i>`;
        checkButton.setAttribute("data-action", "checkButton");
        li.appendChild(checkButton);
        
        
        p.className = "task-name";
        p.textContent = obj.name;
        li.appendChild(p);

        editButton.className = "fas fa-edit";
        editButton.setAttribute("data-action", "editButton");
        li.appendChild(editButton);
       

        const containerEdit = document.createElement("div");
        containerEdit.className = "editContainer"
        const inputEdit = document.createElement("input");
        inputEdit.setAttribute("type", "text");
        inputEdit.className = "editInput";
        containerEdit.appendChild(inputEdit);
        const containerEditButton = document.createElement("button");
        containerEditButton.className = "editButton";
        containerEditButton.textContent = "Edit";
        containerEditButton.setAttribute("data-action", "containerEditButton")
        containerEdit.appendChild(containerEditButton);
        const containerCancelButton = document.createElement("button");
        containerCancelButton.className = "cancelButton";
        containerCancelButton.textContent = "Cancel";
        containerCancelButton.setAttribute("data-action", "containerCancelButton")
        containerEdit.appendChild(containerCancelButton);

        li.appendChild(containerEdit);

        deleteButton.classList.add("fas", "fa-trash-alt");
        deleteButton.setAttribute("data-action", "deleteButton");
        li.appendChild(deleteButton);
        
       
        // addEventLi(li);

        return li;
    }

    function renderTasks(){
        ul.innerHTML = "";
        arrTasks.forEach(task => {
            ul.appendChild(generateLiTasck(task));
        } )
    }

    function addTask(task){
        arrTasks.push({     name: task,
                            createdAt: Date.now(),
                            completada: false
                    });
        setNewData();
    }

    function clickedUl(e){
        const dataAction = e.target.getAttribute("data-action");

        if(!dataAction) {
             return;
        }

        let currentLi = e.target;

        while(currentLi.nodeName !== "LI"){
            currentLi = currentLi.parentElement;
        }

        const currentLiIndex = [...lis].indexOf(currentLi);


        const actions = {
            editButton: () => {
                const editContainer = currentLi.querySelector(".editContainer");

                [...ul.querySelectorAll(".editContainer")].forEach(container =>{
                    container.removeAttribute("style");
                })

                editContainer.style.display = 'flex';
            },
            deleteButton: function(){
                arrTasks.splice(currentLiIndex, 1);
                renderTasks(); // mais custosa mas mais seguro. sem chances de ter dados de um jeito e visual de outro
                //currentLi.remove();
                //currentLi.parentElement.removeChild(currentLi);
                setNewData();
            },
            containerEditButton: function(){
                const val = currentLi.querySelector(".editInput").value;
                arrTasks[currentLiIndex].name = val;
                renderTasks(); 
                setNewData();
            },
            containerCancelButton:function(){
                const editContainer = currentLi.querySelector(".editContainer");

                currentLi.querySelector(".editContainer").removeAttribute("style");

                currentLi.querySelector(".editInput").value = "";
            },
            checkButton: function(){
                arrTasks[currentLiIndex].completada = !arrTasks[currentLiIndex].completada;

                // if(arrTasks[currentLiIndex].completada){
                //     currentLi.querySelector(".fa-check").classList.remove("displayNone");
                // }else{
                //     currentLi.querySelector(".fa-check").classList.add("displayNone");
                // }
                renderTasks(); 
                setNewData();
            }
        }

        
        if(actions[dataAction]){
            actions[dataAction]();
        }

    }

    todoAddForm.addEventListener("submit", function(e){
        e.preventDefault();
        console.log(itemInput.value);
        // ul.innerHTML += `<li class="todo-item">
        //                     <button class="button-check">
        //                         <i class="fas fa-check displayNone"></i>
        //                     </button>
        //                     <p class="task-name">${itemInput.value}</p>
        //                     <i class="fas fa-edit" ></i>
        //                     <i class="fas fa-trash-alt" id="btn-remover"></i>
        //                 </li>`;
        addTask(itemInput.value);
        renderTasks();
        itemInput.value = "";
        itemInput.focus();   
        
    });

    ul.addEventListener("click", clickedUl);

    renderTasks();
    
})()
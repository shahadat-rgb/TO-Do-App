let newTask=document.querySelector("#new-task");
let form=document.querySelector("form");
let todoUl=document.querySelector("#list-items");
let completeUl=document.querySelector(".complete ul");

let createTask =function(task) {
   listItem =document.createElement('li'); 
   checkBox =document.createElement('input');
   label =document.createElement('label');

   checkBox.type=  'checkbox';
   label.innerText= task;

   listItem.appendChild(checkBox);
   listItem.appendChild(label);
   
   return listItem;
}

let addTask =function(event) {
    event.preventDefault();
    let listItem= createTask(newTask.value);
    todoUl.appendChild(listItem);
    newTask.value ="";
 
//  bind the new list item to the imcomplete list.
    bindInCompleteItem(listItem,completeTask)
}

let completeTask  =function(){
    let listItem =this.parentNode;
    let deleteBtn= document.createElement('button');
    deleteBtn.innerText='delete';
    deleteBtn.className='delete';
    listItem.appendChild(deleteBtn);

    let checkbox =listItem.querySelector('input[type="checkbox"]');
    checkbox.remove();
    completeUl.appendChild(listItem)

    bindCompleteItem(listItem,deleteTask)
}

let deleteTask=function(){
    let listItem =this.parentNode;
     ul =listItem.parentNode;
     ul.removeChild(listItem);
}

let bindInCompleteItem=function(taskItem,checkboxClick) {
    let checkBox =taskItem.querySelector('input[type="checkbox"]');
    checkBox.onchange= checkboxClick;
}

let bindCompleteItem=function(taskItem,deleteBtnClick) {
    let deleteBtn =taskItem.querySelector('.delete');
     deleteBtn.onclick =deleteBtnClick;  
}

for(let i=0; i< todoUl.children.length; i++ ) {
    bindInCompleteItem(todoUl.children[i], completeTask);
}

for(let i=0; i< completeUl.children.length; i++ ) {
    bindCompleteItem(completeUl.children[i], deleteTask);
}

form.addEventListener('submit',addTask)
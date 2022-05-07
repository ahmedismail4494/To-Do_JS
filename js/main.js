/*

Student Tasks:- 
[1] Use Sweet Alert If Input Is Empty (Ok)
[2] Check If Task Is Exist By LocalStorage (Ok)
[3] Create Delete All Tasks Button (Ok) 
[4] Create Finishe All Tasks Button (Ok) 
[5] Add To Task To The Local Storage

*/



//  Seting UP Variables    
let MyInput = document.querySelector(".tasks_input"),
    AddButton = document.querySelector(".tasks_plus"),
    InformBox = document.querySelector(".inform"),
    NoTaskMessage = document.querySelector(".inform .no_tasks_message"),
    TasksBox = document.querySelector(".tasks"),
    TaskCount = document.querySelector(".tasks_count span"),
    TaskCompleted = document.querySelector(".tasks_completed span");

//  1:- Focus On Input Field 
window.onload = function () { "use strict";
  MyInput.focus();

  GetNotes();
};

//  2:-  Adding The Task
AddButton.onclick = () => {

  if(MyInput.value !== ""){
    // A:- Remove NO Task Message
    NoTaskMessage.remove();

    // B:- Create Main Element Element
    let MainBox = document.createElement("span"); 
        MainBox.className = "task_box"; 
        MainBox.textContent = MyInput.value;

    // C:- Create Delete Element
    let DeleteBox = document.createElement("span");
        DeleteBox.className = "delete";
        DeleteBox.textContent = "Delete";

    // D:- Add task Box To The Tasks Container
    if(!localStorage.getItem(MyInput.value)){
      MainBox.appendChild(DeleteBox);
      TasksBox.appendChild(MainBox);

    //  Save note In Local Storage
    localStorage.setItem(MyInput.value,MyInput.value);
    }else{  return false;  }

  }else{
    alert("Please Inter Your Task");
    NoTaskMessage.textContent = `Please Inter Your Task` ;
   };


    // E:- Make The Input Empty
    MyInput.value = "";
    // Focus On Field
    MyInput.focus();
    // Calculate Tasks
    CountTasks();
};




//  3:- Delete The Cuurent Note
document.addEventListener("click", (e) => {

  // Delet item
  if(e.target.className == "delete"){
    e.target.parentNode.remove();
    localStorage.removeItem(e.target.parentNode.textContent);
  };

  //  Add Toggle Class  Finished
  if(e.target.classList.contains("task_box")){
    e.target.classList.toggle("finished")
  };

  // Delet All
  if(e.target.className == "tasks_delet-all"){
    

    // Delet All From local Storage
    if(localStorage.length){
      for(const [k] of Object.entries(localStorage)){
        localStorage.removeItem(k);
      }
    }else{ return false; }
    
    // Delet All From Task Box
    TasksBox.innerHTML = "";
    InformBox.appendChild(NoTaskMessage);

    window.location.reload(true);
  };

  //  Add Toggle Class  Finished
  if(e.target.classList.contains("tasks_finish-all")){
    let AllTasks = document.querySelectorAll(".task_box");
    AllTasks.forEach((task) => {
        
        task.classList.toggle("finished");
    });
  };

  // Calculate Tasks
  CountTasks();

  

});




//  5:-  Count The Number Of Normal Tasks -&- Completed Tasks
function CountTasks(){
  // Calculate All Tasks
  TaskCount.innerHTML = document.querySelectorAll(".tasks_content .task_box").length;
  // Calculate Completed Tasks
  TaskCompleted.textContent = document.querySelectorAll(".tasks_content .finished").length;
};




//  6:- Get Notes From LocalStorage
  function GetNotes(){
    "use strict";

    if (localStorage.length) {
      for (const [k] of Object.entries(localStorage)) {

    // A:- Remove NO Task Message
    let NoTaskMessage = document.querySelector(".no_tasks_message");
    if(document.body.contains(document.querySelector(".no_tasks_message"))){
      NoTaskMessage.remove();
    }

    // B:- Create Main Element Element
    let MainBox = document.createElement("span");
        MainBox.className = "task_box";
        MainBox.textContent = k;
    

    // C:- Create Delete Element
    let DeleteBox = document.createElement("span");
        DeleteBox.className = "delete";
        DeleteBox.textContent = "Delet";


    // D:- Add task Box To The Tasks Container
    MainBox.appendChild(DeleteBox);
    TasksBox.appendChild(MainBox);

    // E:- Make The Input Empty
    MyInput.value = "";

    CountTasks();
      }
    }
    else{
      return false;
    }
  }


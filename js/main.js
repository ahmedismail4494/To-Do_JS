
//  Seting UP Variables    
var MyInput = document.querySelector(".tasks_input"),
    AddButton = document.querySelector(".tasks_plus"), 
    TasksContainer = document.querySelector(".tasks_content"), 
    NoTaskMessage = document.querySelector(".no_tasks_message"), 
    TaskCount = document.querySelector(".tasks_count span"),    
    TaskCompleted = document.querySelector(".tasks_completed span"); 

  var TaskBox = document.querySelector(".task_box"),    
      DeletElement = document.querySelector(".delete"); 

//  1:- Focus On Input Field
window.onload = () => {
  "use strict";
  MyInput.focus();

  GetNotes();
}


//  2:-  Adding The Task
AddButton.onclick = () => {
  "use strict";
  if(MyInput.value === ""){
    alert("No Note To Add");
  }
  else{
    // A:- Remove NO Task Message
    let NoTaskMessage = document.querySelector(".no_tasks_message");
    if(document.body.contains(document.querySelector(".no_tasks_message"))){
      NoTaskMessage.remove();
    }
    
    // B:- Create Main Element Element
    let MainBox = document.createElement("span");
        MainBox.className = "task_box"; 
    // Creat Text Node
    let Maintext = document.createTextNode(MyInput.value);

    // C:- Create Delete Element
    let DeleteBox = document.createElement("span");
        DeleteBox.className = "delete";
    // Creat Delete Text Node
    let DeleteText = document.createTextNode("Delete");

    // D:- Add task Box To The Tasks Container
    DeleteBox.appendChild(DeleteText);
    MainBox.appendChild(Maintext);
    MainBox.appendChild(DeleteBox);
    TasksContainer.appendChild(MainBox);

    //  Save note In Local Storage
    localStorage.setItem(MyInput.value,MyInput.value);

    // E:- Make The Input Empty 
    MyInput.value = "";

    CountTasks();
  }
}


//  3:- Delete The Cuurent Note
document.addEventListener('click', function(e){
  //  Add Toggle Class  Finished
  if(e.target.classList.contains("task_box")){
    e.target.classList.toggle("finished");
  }
  if(e.target.className == "delete"){
    // Remove Curent Task
    e.target.parentNode.remove();
    //  Chek Number Of Task Inside The Container 
    if(TasksContainer.childElementCount == 0){
      CrateNoTasks();
    }
  }
  
  CountTasks();
});




//  4:-  Function To Create No Tasks Message
function CrateNoTasks(){
  // Create Message Span Element
  let MsgSpan = document.createElement("span"); 
      MsgSpan.className = "no_tasks_message";
  // Create The Text Message 
  let MsgText = document.createTextNode("NOo  Tasks To Show");
  // Add Text To Message Span Element
  MsgSpan.appendChild(MsgText);

  // Append The Message Span Element To The Task Container 
  TasksContainer.appendChild(MsgSpan);
} 


//  5:-  Count The Number Of Normal Tasks -&- Completed Tasks
function CountTasks(){
  TaskCount.innerHTML = document.querySelectorAll(".tasks_content .task_box").length;

  TaskCompleted.textContent = document.querySelectorAll(".tasks_content .finished").length;
}


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
    // Creat Text Node
    let Maintext = document.createTextNode(k);

    // C:- Create Delete Element
    let DeleteBox = document.createElement("span");
        DeleteBox.className = "delete";
    // Creat Delete Text Node
    let DeleteText = document.createTextNode("Delete");

    // D:- Add task Box To The Tasks Container
    DeleteBox.appendChild(DeleteText);
    MainBox.appendChild(Maintext);
    MainBox.appendChild(DeleteBox);
    TasksContainer.appendChild(MainBox);

    // E:- Make The Input Empty 
    MyInput.value = "";

    CountTasks();
      }
    }
    else{
      return false;
    }
  }  



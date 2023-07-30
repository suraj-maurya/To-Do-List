let Form = document.querySelector(".form");
let TaskContainer = document.querySelector("#TaskContainer");
let TaskContainerDiv;

// let SearchBOX = Form.Task;

Form.addEventListener("submit", (e) => {
  e.preventDefault();
  let Text = document.createElement("div");
  // let Input_Text=Form.Task.value;
  Text.classList.add('Task');
  Text.innerHTML = `<input type="checkbox" name="checkbox" id=""> <div class="TaskTxt">${Form.Task.value}</div><span class="Delete">X</span>`;

  if (Form.Task.value === "") {
   
    alert('Pls fill!')
  } else {
   
    TaskContainer.prepend(Text);
    
  }
  Form.Task.value = "";
});

TaskContainer.addEventListener("click", (e) => {
  // e.target.style.backgrouncolor='white';
  if (e.target.name === "checkbox") {
    if (e.target.checked == true) {
      e.target.nextElementSibling.style.textDecoration = "line-through";
    } else {
      e.target.nextElementSibling.style.textDecoration = "none";
    }
  }
  if(e.target.className==='TaskTxt'){
    if(e.target.previousElementSibling.checked===true){
      e.target.style.textDecoration = "none";
      e.target.previousElementSibling.checked=false
    }else{
      e.target.style.textDecoration = "line-through";
      e.target.previousElementSibling.checked=true
    }
  
  }
  if(e.target.className==='Delete'){
    e.target.parentNode.remove();
    
    }
});
// Get the keys of all the stored tasks
let keys = Object.keys(localStorage);




const btn = document.querySelector(".add-btn");
const input = document.querySelector(".add-text");
const task = document.querySelector(".task");


btn.addEventListener("click", ()=>{
    if(input.value === ''){
        alert("You must write something!");
    } else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        task.appendChild(li);
        input.value = '';
        let span = document.createElement("span");
        span.innerHTML = '\u00d7'
        li.appendChild(span);
        saveTask();
    }
})

task.addEventListener("click", (evt)=>{
    if(evt.target.tagName == 'LI'){
        evt.target.classList.toggle("task-complete");
        saveTask();
    } else if(evt.target.tagName === 'SPAN'){
        evt.target.parentElement.remove();
        saveTask();
    }
}, false);

function saveTask() {
    localStorage.setItem("data", task.innerHTML);
}

function showTask() {
    task.innerHTML = localStorage.getItem("data");
}

showTask();
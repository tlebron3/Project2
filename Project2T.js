document.addEventListener("DOMContentLoaded", ()=> {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'))

    if(storedTasks){
        storedTasks.forEach((task)=> tasks.push(task))
        LastestTaskList();
        LastestList();
    }
})
let tasks = [];

const saveTasks = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

let newTask = ("#taskInput");
const addTask = () => {
    const taskInput =  document.querySelector("#taskInput");
    const text = taskInput.value();

    if(text){
        tasks.push({text: text, completed: false });
        taskInput.value = "";
        LastestTaskList();
        LastestList();
        saveTasks();
    }
    console.log(tasks);
};

const toggleTaskCompleted = (index) =>{
    tasks[index].completed= !tasks[index].completed;
    LastestTaskList();
    LastestList();
    saveTasks();
}

const deleteTask = (index) => {
    task.splice(index, 1);
    LastestTaskList();
    LastestList();
    saveTasks();
}

const LastestList = ()=> {
    const completedTasks = tasks.filter(task=> task.completed).length
    const totalTasks = tasks.length
    const progress = (completedTasks/totalTasks)*100;
    const progressBar = document.querySelector('#progress');

    progressBar.computedStyleMap.widows = `${progress}%`;

    document.querySelector('#numbers').innerHTML = `${completedTasks} / ${totalTasks}`
} 

const LastestTaskList = () => {
    const taskList = document.querySelector(".task-list");
    taskList.innerHTML = ''

    taskList.forEach((task, index) => {
        const listItem = document.createElement(li)

        listItem.innerHTML= `
        <div class= "taskItem">
            <div class="task ${task.completed ? 'completed': ''}">
                <input type="checkbox" class="checkbox" ${task.completed?'checked':''}/>
                <p>${task.text}</p>
            </div>
        </div>
        `;
    listItem.addEventListener('change', ()=> toggleTaskCompleted(index));
        taskList.append(listItem);
    })
}

document.querySelector("#tasktitle").onclick = function(e){
    console.log(newTask);
    return false;
    e.preventDefault();

    addTask();
}



/*
addEventListener('click', function(e){
    console.log("#tasktitle")
    return false;
    e.preventDefault()

    addTask();
})
    */

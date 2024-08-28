const todolist = [];

function addtodolist() {
    let event = document.querySelectorAll('.todolist input');

    if (event[0].value != '' && event[1].value != ''){
        todolist.push([event[0].value, event[1].value]);
    }
    
    event[0].value = '';
    event[1].value = '';
    printTask(todolist);
}

function printTask(todolist) {
    let i = 0;
    var todolistHTML = '';

    for(i = 0; i < todolist.length; i++){
        todolistHTML += `
                    <p>${todolist[i][0]}</p>
                    <p>${todolist[i][1]}</p>
                    <button class="delete-btn" onclick="
                    todolist.splice(${i},1);
                    printTask(todolist);
                    "> Delete </button>`;
    }

    document.querySelector('.output').innerHTML = todolistHTML;
}

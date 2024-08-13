var input = document.getElementById("taskInput");
var list = document.getElementById("list");

function handlebtn() {
    if (input.value.trim() !== "") {
        list.innerHTML += '<div class="todo-item"><h1>' + input.value + '</h1>' +
            '<button class="delete-btn" onclick="deleteval(this)">Delete</button>' +
            '</div>';
        input.value = "";
    }
}

function deleteval(ele) {
    ele.parentElement.remove();
}
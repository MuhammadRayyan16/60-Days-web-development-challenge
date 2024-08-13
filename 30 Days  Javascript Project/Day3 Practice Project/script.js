let input = document.getElementById('taskInput')
let list = document.getElementById('list');


const handlebtn = () => {

    list.innerHTML += `<div><h1>${input.value}</h1>
    <button onclick="deleteval(this)">Delete</button>
    </div>`;

    input.value = '';
}

const deleteval = (ele) => {
    ele.parentElement.remove();
}
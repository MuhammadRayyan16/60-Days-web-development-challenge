let input = document.getElementById('taskInput')
let list = document.getElementById('list');


const handlebtn = () => {

    list.innerHTML += `<div><h1>${input.value}</h1>
    <button 'handleDelete(this)'>Delete</button>
    </div>`;

    input.value = '';
}

const handleDelete = (ele) => {
    ele.target.parentElement.remove();
}
let input = document.getElementById('input').value;

let list = document.getElementById('list');


const handlebtn = () => {

    list.innerHTML += `<div><h1>${input.value}</h1>
    <button onclick'this'>Delete</button>
    </div>`;

    input.value = '';
}

const handleDelete = (e) => {
    e.target.parentElement.remove();
}
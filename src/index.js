import './style.css';

const list = [
  {
    index: 0,
    description: 'wash the dishes',
    completed: true,
  },
  {
    index: 1,
    description: 'complete To Do list project',
    completed: true,
  },
];

const toDo = document.querySelector('.to-do-list');

list.forEach((item) => {
  toDo.innerHTML += `
   <li class="list-element">
         <div>
            <input type="checkbox">
            <span>${item.description}</span>
        </div>
    <i class="fa-solid fa-ellipsis-vertical"></i>
  </li>    
  <hr>              
  `;
});
import check from './check';
import { Storage, getStorage, editTask } from './localStorage';
import trashTask from './remove';

export const populateList = () => {
  const listContainer = document.querySelector('.to-do-list');

  while (listContainer.lastChild) {
    listContainer.removeChild(listContainer.lastChild);
  }

  const tasks = getStorage();

  if (tasks != null) {
    for (let i = 0; i < tasks.length; i += 1) {
      const lists = document.createElement('li');
      lists.classList.add('list');
      lists.id = tasks[i].index;
      lists.draggable = true;

      const list1Child = document.createElement('div');
      list1Child.classList.add('new-task-added');

      const input = document.createElement('input');
      input.classList.add('check');
      input.type = 'checkbox';
      input.name = 'check1';

      if (tasks[i].completed) {
        input.checked = true;
      }

      const label = document.createElement('label');
      label.contentEditable = true;
      label.classList.add('label');
      label.innerHTML = tasks[i].description;
      label.style.textDecoration = tasks[i].completed === true ? 'line-through' : 'none';
      label.style.color = '#000';

      const newDiv = document.createElement('div');
      newDiv.setAttribute('class', 'new-task');
      newDiv.append(input, label);

      const trash = document.createElement('span');
      trash.classList.add('bin');
      trash.innerHTML = "<i class='fas fa-trash-alt'></i>";
      trash.style.display = 'flex';
      trash.style.cursor = 'pointer';
      trash.id = tasks.indexOf(tasks[i]);

      list1Child.append(newDiv, trash);
      lists.append(list1Child);
      listContainer.appendChild(lists);

      label.addEventListener('focus', () => {
        trash.style.display = 'none';
        trash.style.color = '#fff';
        trash.style.cursor = 'pointer';
        label.style.outline = 'none';
      });

      label.addEventListener('blur', (e) => {
        editTask(e.target, tasks, tasks[i]);
        populateList();
      });

      input.addEventListener('change', (e) => {
        check(e.target, tasks[i]);
        Storage(tasks);
      });

      trash.addEventListener('mousedown', (e) => {
        e.preventDefault();
        trashTask(JSON.parse(trash.id));
        populateList();
      });
    }
  }
};

export default populateList;
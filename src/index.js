import './style.css';
import { populateList } from '../modules/populate';
import addNewTask from '../modules/add';

const addNewTaskInput = document.querySelector('.to-do-input');
const addTaskBtn = document.querySelector('.addbtn');
const removeCompletedTask = document.querySelector('.delete-btn');

addTaskBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addNewTask(addNewTaskInput);
});

removeCompletedTask.addEventListener('click', (e) => {
  e.preventDefault();
  populateList();
});

document.addEventListener('DOMContentLoaded', (e) => {
  e.preventDefault();
  populateList();
});
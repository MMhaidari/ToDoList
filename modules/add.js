import { Storage, getStorage } from './localStorage';
import { populateList } from './populate';

const newTask = (item) => {
  const taskList = getStorage();
  const task = {
    index: taskList.length + 1,
    completed: false,
    description: item.value,
  };
  if (item.value === '') {
    item.preventDefault();
  }
  taskList.push(task);

  Storage(taskList);
  item.value = '';
  populateList(taskList);
  return task;
};

export default newTask;
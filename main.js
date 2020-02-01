'use strict';

(function() {
  const todos = [];
  const tableBody = document.getElementById('table-body');
  const formSectionInput = document.getElementById('form-section_input');
  const addBtn = document.getElementById('add-btn');
  addBtn.addEventListener('click', () => {
    addTodo();
  })
  // inputに入力された内容のtodoを作成
  const addTodo = () => {
    const content = formSectionInput.value;
    const stateBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');
    stateBtn.textContent = '作業中';
    deleteBtn.textContent = '削除';
    const todo = {
      id: '',
      content,
      stateBtn,
      deleteBtn
    }
    todos.push(todo);
    formSectionInput.value = '';
  }
}());
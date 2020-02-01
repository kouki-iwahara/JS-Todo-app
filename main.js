'use strict';

(function() {
  const todos = [];
  const tableBody = document.getElementById('table-body');
  const formSectionInput = document.getElementById('form-section_input');
  const addBtn = document.getElementById('add-btn');
  addBtn.addEventListener('click', () => {
    addTodo();
  })
  // inputに入力された内容のtodoを追加する
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
    showTodos()
    formSectionInput.value = '';
  }

  // 追加されたtodoを表示する
  const showTodos = () => {
    // テーブルの中身をリセット
    while(tableBody.firstChild) {
      tableBody.textContent = '';
    }
    todos.forEach((todo, index) => {
      const tr = document.createElement('tr');
      const id = document.createElement('td');
      const content = document.createElement('td');
      const state = document.createElement('td');
      const remove = document.createElement('td');
      todo.id = index + 1;
      id.textContent = todo.id
      content.textContent = todo.content;
      tableBody.appendChild(tr);
      tr.appendChild(id);
      tr.appendChild(content);
      tr.appendChild(state);
      tr.appendChild(remove);
      state.appendChild(todo.stateBtn);
      remove.appendChild(todo.deleteBtn);
    });
    console.log(todos);
  }
}());
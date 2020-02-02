'use strict';

(function() {
  const todos = [];
  const tableBody = document.getElementById('table-body');
  const formSectionInput = document.getElementById('form-section_input');
  const addBtn = document.getElementById('add-btn');
  const radioFormSection = document.getElementById('radio-form-section');
  // 状態ボタンをクリックした時の挙動
  addBtn.addEventListener('click', () => {
    addTodo();
  });
  // ラジオボタンのチェックが切り替わった時の挙動
  radioFormSection.addEventListener('change', (event) => {
    changeTodoDisplay(event.target.value);
  });
  // inputに入力された内容のtodoを追加する
  const addTodo = () => {
    const content = formSectionInput.value;
    //: todoの入力が無かったら処理を止める
    if(!content) {
      return alert('todoを入力して下さい');
    }
    const stateBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');
    stateBtn.textContent = '作業中';
    stateBtn.addEventListener('click', () => {
      switchState(stateBtn);
    });
    deleteBtn.textContent = '削除';
    const todo = {
      id: '',
      content,
      stateBtn,
      deleteBtn
    };
    todos.push(todo);
    // idを振る
    todos.forEach((todo, index) => todo.id = index + 1);
    deleteBtn.addEventListener('click', () => {
      const index = todos.indexOf(todo);
      deleteTodo(index);
    });
    // ラジオボタンの状態と状態切り替えボタンが一致するtodoを表示
    for(let i = 0; i < radioFormSection.children.length; i++) {
      if(radioFormSection.children[i].checked === true) {
        changeTodoDisplay(radioFormSection.children[i].value);
      };
    };
    formSectionInput.value = '';
  };

  // 追加されたtodoを表示する
  const showTodos = (todos) => {
    // テーブルの中身をリセット
    while(tableBody.firstChild) {
      tableBody.textContent = '';
    };
    todos.forEach((todo) => {
      const tr = document.createElement('tr');
      const idElem = document.createElement('td');
      const contentElem = document.createElement('td');
      const stateBtnElem = document.createElement('td');
      const deleteBtnElem = document.createElement('td');
      idElem.textContent = todo.id
      contentElem.textContent = todo.content;
      stateBtnElem.appendChild(todo.stateBtn);
      deleteBtnElem.appendChild(todo.deleteBtn);
      tableBody.appendChild(tr);
      tr.appendChild(idElem);
      tr.appendChild(contentElem);
      tr.appendChild(stateBtnElem);
      tr.appendChild(deleteBtnElem);
    });
  };
  // 状態ボタン「作業中⇄完了」の切り替え
  const switchState = (stateBtn) => {
    if(stateBtn.textContent === '作業中') {
      stateBtn.textContent = '完了';
    } else {
      stateBtn.textContent = '作業中';
    };
    // ラジオボタンの状態と状態切り替えボタンが一致するtodoを表示
    for(let i = 0; i < radioFormSection.children.length; i++) {
      if(radioFormSection.children[i].checked === true) {
        changeTodoDisplay(radioFormSection.children[i].value);
      };
    };
  };
  // ラジオボタンでtodo表示の切り替え
  const changeTodoDisplay = (radioBtnState) => {
    // 「すべて」の場合
    if(radioBtnState === 'all') {
      showTodos(todos);
    };
    // 「作業中」の場合
    if(radioBtnState === 'work') {
      const filteredTodos = todos.filter((todo) => todo.stateBtn.textContent === '作業中');
      showTodos(filteredTodos);
    };
    // 「完了」の場合
    if(radioBtnState === 'comp') {
      const filteredTodos = todos.filter((todo) => todo.stateBtn.textContent === '完了');
      showTodos(filteredTodos);
    };
  };
  //: todoを削除する
  const deleteTodo = (index) => {
    todos.splice(index, 1);
    todos.forEach((todo, index) => todo.id = index + 1);
    // ラジオボタンの状態と状態切り替えボタンが一致するtodoを表示
    for(let i = 0; i < radioFormSection.children.length; i++) {
      if(radioFormSection.children[i].checked === true) {
        changeTodoDisplay(radioFormSection.children[i].value);
      };
    };
  };
}());
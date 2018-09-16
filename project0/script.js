const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  var title = prompt("Enter TODO title");
  if (title){
    itemCountSpan.innerHTML = parseInt(itemCountSpan.innerHTML) + 1;
    uncheckedCountSpan.innerHTML = itemCountSpan.innerHTML;
    var li = document.createElement("li");
    li.setAttribute('id','todo-text'+itemCountSpan.innerHTML);
    li.className = classNames.TODO_ITEM;
    li.innerHTML = title;
    var input = document.createElement("input");
    input.setAttribute("type","checkbox");
    input.setAttribute("id","todo-checkbox-"+itemCountSpan.innerHTML);
    input.setAttribute("onClick","toggleCheckbox('"+itemCountSpan.innerHTML+"')");
    input.className = classNames.TODO_CHECKBOX;
    var button = document.createElement("button");
    button.setAttribute("id","todo-delete-"+itemCountSpan.innerHTML);
    button.setAttribute("onClick","deleteTODO('"+itemCountSpan.innerHTML+"')");
    button.disabled = true;
    button.className = classNames.TODO_DELETE;
    button.innerHTML = "Delete";
    li.appendChild(input);
    li.appendChild(button);
    list.appendChild(li);
  }
}

function toggleCheckbox(id){
  const checkbox_element = document.getElementById('todo-checkbox-'+id);
  const button_element = document.getElementById('todo-delete-'+id);
  if(checkbox_element.checked == true){
    uncheckedCountSpan.innerHTML = parseInt(uncheckedCountSpan.innerHTML) - 1;
    button_element.disabled = false;
  }else{
    uncheckedCountSpan.innerHTML = parseInt(uncheckedCountSpan.innerHTML) + 1;
    button_element.disabled = true;
  }
}

function deleteTODO(id){
  document.getElementById('todo-text'+id).remove();
  itemCountSpan.innerHTML = parseInt(itemCountSpan.innerHTML) - 1;
}

const input_todo=document.getElementById('input_todo');

const add_btn=document.getElementById('add_btn');
const ul_div=document.getElementById('ul_div')
const todo_list=document.getElementById('todo_list');
const pending_txt=document.getElementById('pending_txt');
const clear_btn=document.getElementById('clear_btn');
const a_id=document.getElementsByClassName('a_id');
const d_id=document.getElementsByClassName('d_id');
const btns=document.getElementsByClassName('dlt_btn');

let todo_count=0;
let btn_click=0;
let id_no=0;
let dlt_btn;
function deleteChild() {
    
    var child = todo_list.lastElementChild; 
    while (child) {
        todo_list.removeChild(child);
        child = todo_list.lastElementChild;
    }
}
function clearAll(){
    deleteChild()
    todo_count=0;
    changePendingTodo();
}
function changePendingTodo(){
    pending_txt.innerText=`You have ${todo_count} pending task`
}
function clearOrAddPendingTodo(item){
    console.log(item.className)
    if(item.className=='a_id'){
        item.classList.remove('a_id')
        item.classList.add('d_id')
        todo_count-=1
    }
    else if(item.className=='d_id'){
        item.classList.remove('d_id')
        item.classList.add('a_id')
        todo_count+=1
    }
    pending_txt.innerText=`You have ${todo_count} pending task`
}


function addTodoList(){
    ul_div.style.display="block";
    id_no+=1;
    let id=`id${id_no}`
    const item=document.createElement('li');
    dlt_btn=document.createElement('button');
    dlt_btn.classList.add('dlt_btn')
    item.classList.add('a_id')
    item.setAttribute('id',id)
    dlt_btn.innerText='delete';
    item.innerText=input_todo.value;
    todo_list.appendChild(item);
    item.appendChild(dlt_btn);
    todo_count+=1;
    input_todo.value='';
    changePendingTodo();
    Array.from(btns).forEach(item => item.addEventListener("click", () => item.parentElement.remove()))
    item.addEventListener('click',()=>{clearOrAddPendingTodo(item)})
    // dlt_btn.addEventListener('click',()=>{dlt_btn.parentElement.remove()})
}
function borderStyleChange(){
    input_todo.style.border="1px solid red"
    borderStyleRemove()
}
function borderStyleRemove(){
    setTimeout(()=>{
        input_todo.style.border="1px solid black"
    },1000)
}
function addTodo(){
    if(input_todo.value==''){
        borderStyleChange();
    }
    else{
        addTodoList()
    }
}
add_btn.addEventListener('click',()=>{addTodo()})
clear_btn.addEventListener('click',()=>{clearAll()})








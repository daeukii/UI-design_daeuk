const todoForm = document.querySelector("#todo-form");
todoForm.addEventListener("submit", todoAdd);

function todoAdd(e) {
    e.preventDefault();

    const todoValue = todoForm.firstElementChild.value;

    const li = document.createElement("li");

    const check = document.createElement("input");
    check.type = "checkbox";
    const text = document.createTextNode(todoValue);
    const button = document.createElement("button");
    button.innerHTML = "X";

    li.appendChild(check);
    li.appendChild(text);

    li.appendChild(button);

    document.querySelector("#todolist").appendChild(li);

    todoForm.firstElementChild.value = "";

    check.addEventListener("click", todoCheck);

    button.addEventListener("click", todoDelete);
}

function todoCheck(e) {

    const check = e.target;
    const li = check.parentNode;
    if (check.checked) {
        li.style.color = "lightgray";
    } else {
        check.parentNode.style.color = "";
    }
}

function todoDelete(e) {
    const button = e.target;
    const li = button.parentNode;
    li.remove();
}

function getCheckedCnt() {
    // 선택된 목록 가져오기
    const query = 'input[name="checkbox"]:';
    const selectedElements =
        document.querySelectorAll(query);

    // 선택된 목록의 갯수 세기
    const selectedElementsCnt =
        selectedElements.length;

    // 출력
    document.getElementById('result').innerText
        = selectedElementsCnt;
}

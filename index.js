//Создать
const posts = document.querySelector("#posts");

posts.sayHello = (text) => alert("Hello " + text);

const buttons = posts.querySelectorAll("#addPost");
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const buttonElement = event.currentTarget;
    const buttonText = buttonElement.innerText;
    posts.sayHello(buttonText);
  });
});

//удалить
const delButtons = posts.querySelectorAll("#deletePost");
delButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const buttonElement = event.currentTarget;
    const div = buttonElement.parentElement;
    div.remove();
  });
});

//Удалить все посты
const buttonDeleteAll = document.querySelector("#deleteAll");

function handler(event) {
  const posts = document.querySelector("#posts");
  const buttonElement = event.currentTarget;
  buttonElement.style.background = "green";
  posts.remove();
}

buttonDeleteAll.addEventListener("click", handler);

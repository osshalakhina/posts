const getInitialPost = (name, description) => ({
  name,
  description,
  id: Math.floor(Math.random() * 20),
});

const handleRemovePost = (postId) => {
  const post = document.querySelector(`[data-post-id="${postId}"]`);
  post.remove();
};

//Изменение названия

const handleSaveName = (postId, inputEl) => {
  const post = document.querySelector(`[data-post-id="${postId}"]`);
  const h2El = post.querySelector("h2");
  const newName = inputEl.value;
  h2El.textContent = newName;

  const postObject = posts.find((post) => post.id === postId);
  if (postObject) {
    postObject.name = newName;
  }
};

const createNameInput = () => {
  const inputEl = document.createElement("input");
  inputEl.type = "text";
  inputEl.placeholder = "Enter name";
  return inputEl;
};

// Изменение описания
const handleSaveDescription = (postId, inputEl) => {
  const post = document.querySelector(`[data-post-id="${postId}"]`);
  const pEl = post.querySelector("p");
  const newDescription = inputEl.value;
  pEl.textContent = newDescription;

  const postObject = posts.find((post) => post.id === postId);
  if (postObject) {
    postObject.description = newDescription;
  }
};

const createWrapperEl = () => {
  const divEl = document.createElement("div");
  divEl.classList = "posts";
  return divEl;
};

const createDescriptionInput = () => {
  const inputEl = document.createElement("input");
  inputEl.type = "text";
  inputEl.placeholder = "Enter description";
  return inputEl;
};

const posts = [
  getInitialPost("Post name 1", "Description"),
  getInitialPost("Post name 2", "Description"),
  getInitialPost("Post name 3", "Description"),
];

// Новый пост

const handleNewPost = () => {
  const newPost = getInitialPost("New Post", "New Description");
  posts.push(newPost);

  const postEl = createWrapperEl();
  postEl.dataset.postId = newPost.id;

  const h2El = document.createElement("h2");
  h2El.textContent = newPost.name;

  const pEl = document.createElement("p");
  pEl.textContent = newPost.description;

  const inputElName = createNameInput();
  const inputElDescription = createDescriptionInput();

  const saveButtonEl = document.createElement("button");
  saveButtonEl.textContent = "Save";
  saveButtonEl.addEventListener("click", () => {
    handleSaveName(newPost.id, inputElName);
    handleSaveDescription(newPost.id, inputElDescription);
  });

  const removeButtonEl = document.createElement("button");
  removeButtonEl.textContent = "Remove Post";
  removeButtonEl.addEventListener("click", () => handleRemovePost(newPost.id));

  postEl.append(h2El);
  postEl.append(inputElName);
  postEl.append(pEl);
  postEl.append(inputElDescription);
  postEl.append(saveButtonEl);
  postEl.append(removeButtonEl);
  rootEl.append(postEl);
};

//Кнопка нового поста
const createNewPostButton = () => {
  const buttonEl = document.createElement("button");
  buttonEl.textContent = "Add New Post";
  buttonEl.addEventListener("click", handleNewPost);
  return buttonEl;
};

const rootEl = document.querySelector("#root");

const newPostButton = createNewPostButton();
rootEl.append(newPostButton);

posts.forEach((post) => {
  const postEl = createWrapperEl();
  postEl.dataset.postId = post.id;

  const h2El = document.createElement("h2");
  h2El.textContent = post.name;

  const pEl = document.createElement("p");
  pEl.textContent = post.description;

  const inputElName = createNameInput();

  const inputElDescription = createDescriptionInput();

  const saveButtonEl = document.createElement("button");
  saveButtonEl.textContent = "Save";
  saveButtonEl.addEventListener("click", () => {
    handleSaveName(post.id, inputElName);
    handleSaveDescription(post.id, inputElDescription);
  });

  const removeButtonEl = document.createElement("button");
  removeButtonEl.textContent = "Remove Post";
  removeButtonEl.addEventListener("click", (event) =>
    handleRemovePost(post.id)
  );

  postEl.append(h2El);
  postEl.append(inputElName);
  postEl.append(pEl);
  postEl.append(inputElDescription);
  postEl.append(saveButtonEl);
  rootEl.append(postEl);
  postEl.append(removeButtonEl);
  rootEl.append(newPostButton);
});

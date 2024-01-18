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

const rootEl = document.querySelector("#root");

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
  postEl.append(pEl);
  postEl.append(inputElName);
  postEl.append(inputElDescription);
  postEl.append(saveButtonEl);
  rootEl.append(postEl);
  postEl.append(removeButtonEl);
});

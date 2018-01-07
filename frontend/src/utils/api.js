const api = "http://localhost:3001";

// Generate token

let token = localStorage.token;

const headers = {
  Accept: "Application/json",
  Authorization: token
};

export const getCategories = () =>
  fetch(`${api}/categories`, {
    headers
  })
    .then(res => res.json())
    .then(data => data.categories);

export const getCategoryPosts = (categoryName) =>
  fetch(`${api}/${categoryName}/posts`, {
    headers
  })
    .then(res => res.json)
    .then(data => data.categoryPosts);

export const getAllPosts = () =>
  fetch(`${api}/posts`, {
    headers
  })
    .then(res => res.json())
    .then(data => data);



export const getPost = postId =>
  fetch(`${api}/postId`, {
    headers
  })
    .then(res => res.json())
    .then(data => data.post);

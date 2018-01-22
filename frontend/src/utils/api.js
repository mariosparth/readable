const api = 'http://localhost:3001';

// Generate token

const token = localStorage.token;

const headers = {
  'Accept': 'Application/json',
  'Content-Type': 'application/json',
  'Authorization': token
};

export const getCategories = () =>
  fetch(`${api}/categories`, {
    headers,
  })
  .then(res => res.json())
  .then(data => data.categories);

export const getCategoryPosts = categoryName =>
  fetch(`${api}/${categoryName}/posts`, {
    headers,
  })
  .then(res => res.json)
  .then(data => data.categoryPosts);

export const getAllPosts = () =>
  fetch(`${api}/posts`, {
    headers,
  })
  .then(res => res.json())
  .then(data => data);


export const getPost = id =>
  fetch(`${api}/posts/${id}`, {
    headers,
  })
  .then(res => res.json())
  .then(data => data);

export const addPost = (postData) => {
  delete postData.visible;
  console.log(postData);
  return fetch(
      `${api}/posts`, {
        method: 'POST',
        body: JSON.stringify(postData),
        headers
      }
    )
    .then(response => response.json())
    .then(data => data)
};

export const getComments = id =>
  fetch(`${api}/posts/${id}/comments`, {
    headers,
  })
  .then(res => res.json())
  .then(data => data);


export const editPost = (post) => {
  const postData = {
    ...post,
    visible: false,
    timestamp: Date.now()
  }

  return fetch(
      `${api}/posts/${post.id}`, {
        method: 'PUT',
        body: JSON.stringify(postData),
        headers
      }
    )
    .then(response => response.json())
    .then(data => data)
};

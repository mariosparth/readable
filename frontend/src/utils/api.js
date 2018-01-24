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

export const deletePost = (post) => {
  return fetch(
      `${api}/posts/${post.id}`, {
        method: 'DELETE',
        headers
      }
    )
    .then(response => response.json())
    .then(data => data)
};

export const addComment = (comment) => {
  return fetch(
      `${api}/comments`, {
        method: 'POST',
        body: JSON.stringify(comment),
        headers
      }
    )
    .then(response => response.json())
    .then(data => data)
};

export const getComment = (id) => {
  return fetch(
      `${api}/comments/${id}`, {
        method: 'GET',
        headers
      }
    )
    .then(response => response.json())
    .then(data => data)
};


export const editComment = (comment) => {
  return fetch(
      `${api}/comments/${comment.id}`, {
        method: 'PUT',
        body: JSON.stringify(comment),
        headers
      }
    )
    .then(response => response.json())
    .then(data => data)
};

export const deleteComment = (comment) => {
  return fetch(
      `${api}/comments/${comment.id}`, {
        method: 'DELETE',
        headers
      }
    )
    .then(response => response.json())
    .then(data => data)
};


export const vote = (id, option, type) => {
  const voteData = {id, option};

  if(type === 'post'){
    return fetch(
      `${api}/posts/${id}`,
      {
        method: 'POST',
        body: JSON.stringify(voteData),
        headers
      }
    )
    .then(response => response.json())
    .then(data => data)
  } else {
    return fetch(
      `${api}/comments/${id}`,
      {
        method: 'POST',
        body: JSON.stringify(voteData),
        headers
      }
    )
    .then(response => response.json())
    .then(data => data)
  }
};

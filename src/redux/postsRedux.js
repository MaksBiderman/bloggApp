// selectors
export const getAllPosts = state => state.posts;

// action names
const DELETE_POST = 'DELETE_POST';
const ADD_POST = 'ADD_POST';

// action creators
export const deletePost = (id) => ({
  type: DELETE_POST,
  payload: id
});

export const addPost = (post) => ({
  type: ADD_POST,
  payload: post
});

// reducer
const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case DELETE_POST:
      return statePart.filter(post => post.id !== action.payload);
    case ADD_POST:
      return [...statePart, action.payload];
    default:
      return statePart;
  };
};

export default postsReducer;

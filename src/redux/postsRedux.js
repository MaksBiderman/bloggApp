// selectors
export const getAllPosts = state => state.posts;
export const selectPostById = (state, postId) => state.posts.find(post => post.id === postId);


// action names
const DELETE_POST = 'DELETE_POST';
const ADD_POST = 'ADD_POST';
const EDIT_POST = 'EDIT_POST';

// action creators
export const deletePost = (id) => ({
  type: DELETE_POST,
  payload: id
});

export const addPost = (post) => ({
  type: ADD_POST,
  payload: post
});
export const editPost = (post) => ({
  type: EDIT_POST,
  payload: post
});


// reducer
const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case DELETE_POST:
      return statePart.filter(post => post.id !== action.payload);
    case ADD_POST:
      return [...statePart, action.payload];
    case EDIT_POST:
      return statePart.map(post => post.id === action.payload.id ? action.payload : post);

    default:
      return statePart;
  };
};

export default postsReducer;

import axios from 'axios';

let nextTodoId = 0;

export const addItem = title => {
  return {
    type: "ADD_ITEM",
    id: nextTodoId++,
    title
  };
};

export const toggleCompletion = id => {
  return {
    type: "TOGGLE_COMPLETION",
    id
  };
};

export const addItemFromWeb = () => {
    return dispatch => {
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=3')
        .then((response) =>{
            console.log(response);
            response.data.map((item)=>{
              console.log(item.title)
              return  dispatch(addItem(item.title));
            })
            // dispatch(addItem(response.data.title));
        })
        .catch((error) => {
            console.log(error);
        })
    }
}

export const removeItem = id => {
  return {
    type: "REMOVE_ITEM",
    id
  }
};

/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: '19asdfiuhas0823hjkadsh809',
      content: 'Wake up',
      isChecked: false
    },
    {
      id: '19asdfiuhas0823hjkadsh810',
      content: 'Code something cool',
      isChecked: false
    },
    {
      id: '19asdfiuhas0823hjkadsh811',
      content: 'Eat ice cream',
      isChecked: false
    }
  ]
};

export const tasks = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    // first argument references the state of the store
    // second argument references the data that is passed down from a component
    addItem: (store, action) => {
      // console.log('store:', store);
      store.items = [...store.items, action.payload];
    },
    removeItem: (store, action) => {
      // The data coming in is the unique id connected to the delete button clicked
      const id = action.payload;
      console.log('id:', id)
      console.log('action.payload:', action.payload)

      // We make a new copy to avoid mutating the original state array
      const newArray = [...store.items]

      // We create a condition that the id of the selected element shall match the id coming in from the delete button
      // Right now its a function and not a boolean. It will turn into one when we add it to findIndex below.
      const condition = (element) => element.id === id;
      console.log('condition', condition)

      // Now we want to take the index of the first item we find in the array that satisfies the condition above
      // If it was 'Eat ice cream', then we would get index 2
      const foundIndex = newArray.findIndex(condition);
      console.log('foundIndex', foundIndex);

      // Now we have found the object we want to delete, and use splice to do it
      // What we are saying here is that we look in newArray for the foundIndex and remove 1.
      // In the case of 'Eat ice cream', it would read: newArray.splice(2, 1)
      // Which would mean, start at index 2 and remove 1 item.
      newArray.splice(foundIndex, 1);

      // We then assign
      store.items = newArray;
    },
    removeAll: (store) => {
      // Im not mutating this
      store.items = []
    },
    handleCheck: (store, action) => {
      const { id } = action.payload;
      // console.log('id:', id)
      const newArray = [...store.items]
      const indexOfObject = newArray.findIndex((item) => item.id === id)
      if (indexOfObject > -1) {
        newArray[indexOfObject].isChecked = !newArray[indexOfObject].isChecked
        store.items = newArray
      }
    }
  }
});

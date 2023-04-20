/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: '19asdfiuhas0823hjkadsh809',
      content: 'Do laundry',
      isChecked: false
    },
    {
      id: '19asdfiuhas0823hjkadsh810',
      content: 'Code some more',
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
      // console.log('action:', action);
      // console.log('action.payload:', action.payload);
      // console.log('store:', store);
      store.items = [...store.items, action.payload];
    },
    removeItem: (store, action) => {
      const id = action.payload;
      console.log('action.payload', action.payload, 'id', id);
      const newArray = store.items;

      const condition = (element) => element.id === id;
      console.log('condition', condition)

      // The findIndex() method is then used to find the index of the Pokemon object to be deleted from the copied array.
      // This is done by passing a callback function that checks if an element's id property matches the id value obtained from the action parameter.

      const foundIndex = newArray.findIndex(condition);
      console.log('foundIndex', foundIndex)

      // Finally, the splice() method is used to remove the Pokemon object from the copied array by passing the index of the Pokemon object and a count of 1 as arguments.
      // The copied array is then assigned back to the store.items property to update the store state.

      newArray.splice(foundIndex, 1)
      console.log('newArray.splice(foundIndex, 1)', newArray.splice(foundIndex, 1))

      // Here we want to filter out the items
      // And return a new state without said item
      // Filter should not be used here. It is recommended to use splice instead to remove stuff.
      // Filter is better when filtering based on state, when we want to access the original also
      // store.items = store.items.filter((item) => item.id !== action.payload.id);
      // console.log('store:', store);
      // console.log('action.payload:', action.payload);
      //
    },
    removeAll: (store) => {
      // Im not mutating this
      store.items = []
    },
    handleCheck: (store, action) => {
      const { id } = action.payload;
      console.log('id:', id)
      // const itemExists = store.items.find((item) => item.id === id); blev muterbart
      const newArray = store.items
      const indexOfObject = newArray.findIndex((item) => item.id === id)
      if (indexOfObject > -1) {
        newArray[indexOfObject].isChecked = !newArray[indexOfObject].isChecked
        store.items = newArray
      }
      // console.log('action.payload:', action.payload, 'itemExists.isChecked:', itemExists.isChecked)
    }
  }
});

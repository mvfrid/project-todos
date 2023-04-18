import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: '19asdfiuhas0823hjkadsh809',
      content: 'Do laundry'
    },
    {
      id: '19asdfiuhas0823hjkadsh810',
      content: 'Code some more'
    },
    {
      id: '19asdfiuhas0823hjkadsh811',
      content: 'Eat ice cream'
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
      // Here we want to filter out the items
      // And return a new state without said item
      store.items = store.items.filter((item) => item.id !== action.payload.id);
      // console.log('store:', store);
      // console.log('action.payload:', action.payload);
    },
    removeAll: (store) => {
      store.items = []
    }
  }
});

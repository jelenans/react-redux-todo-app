let nextItemId = 0;

export const addItem = text => ({
  type: 'ADD_ITEM',
  id: nextItemId++,
  text
});

export const removeItem = id => ({
  type: 'REMOVE_ITEM',
  id
});

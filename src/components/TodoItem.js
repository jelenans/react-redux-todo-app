import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ todo, removeItem }) => (
  <li>
    {todo.text}
    <button onClick={() => removeItem(todo.id)}>Remove</button>
  </li >
);

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired,
  removeItem: PropTypes.func.isRequired
};

export default TodoItem;
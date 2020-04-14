import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

const TodoList = ({ todos, removeItem }) => (
  <ul>
    {todos.map(todo =>
      <TodoItem
        key={todo.id}
        todo={todo}
        removeItem={removeItem}
      />
    )}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  removeItem: PropTypes.func.isRequired
}

export default TodoList;
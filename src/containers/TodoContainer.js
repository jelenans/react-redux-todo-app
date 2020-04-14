import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TodoList from '../components/TodoList';
import AddTodoItem from '../components/AddTodoItem';
import * as actionCreators from '../actions/actionCreators';

// Map state and dispatch to props
const mapStateToProps = state => ({ todos: state });

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export const AddTodoItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodoItem);

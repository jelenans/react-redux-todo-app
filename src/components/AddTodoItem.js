import React from 'react';

class AddTodoItem extends React.Component {
  _onSubmit = e => {
    e.preventDefault();
    const text = this.refs.text.value;
    this.props.addItem(text);
    this.refs.form.reset();
  };

  render() {
    return (
      <form onSubmit={this._onSubmit} ref='form'>
        <input type='text' ref='text' />
        <input type='submit' value='Add Item' />
      </form>
    );
  }
}

export default AddTodoItem;
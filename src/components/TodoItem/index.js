// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoItem, deleteTodo} = props
  const {title, id} = todoItem
  const onDeleteTodo = () => {
    deleteTodo(id)
  }
  return (
    <li className="todo-items-container">
      <p className="titel-name">{title}</p>
      <button className="button" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem

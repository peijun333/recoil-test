import { useTodoItem } from '~/store/TodoList/TodoItem'
import { Todo } from '~/types/Todo'

interface Props {
  item: Todo
}

export const TodoItem: React.FC<Props> = ({ item }) => {
  const { editItemText, toggleItemCompletion, deleteItem } = useTodoItem()
  return (
    <div>
      <input
        type="text"
        value={item.text}
        onChange={({ target: { value } }) => editItemText(item.id, value)}
      />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={() => toggleItemCompletion(item.id)}
      />
      <button onClick={() => deleteItem(item.id)}>X</button>
    </div>
  )
}

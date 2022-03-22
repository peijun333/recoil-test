import { useTodoItemCreator } from '~/store/TodoList/TodoItemCreator'

export const TodoItemCreator: React.FC = () => {
  const { text, addItem, onChangeText } = useTodoItemCreator()

  return (
    <div>
      <input type="text" value={text} onChange={({ target: { value } }) => onChangeText(value)} />
      <button onClick={addItem}>Add</button>
    </div>
  )
}

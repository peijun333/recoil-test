import { useRecoilValue } from 'recoil'
import { TodoItemCreator } from '~/components/TodoList/Creator'
import { todoAtoms } from '~/store/recoil/todo/atoms'
import { TodoItem } from './Item'

export const TodoList: React.FC = () => {
  const todoList = useRecoilValue(todoAtoms.todoList)

  return (
    <>
      <TodoItemCreator />
      {todoList.map((elem) => (
        <TodoItem key={elem.id} item={elem} />
      ))}
    </>
  )
}

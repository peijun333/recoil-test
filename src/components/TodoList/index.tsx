import { useRecoilValue } from 'recoil'
import { TodoItemCreator } from '~/components/TodoList/Creator'
import { TodoListFilter } from '~/components/TodoList/Filter'
import { TodoItem } from '~/components/TodoList/Item'
import { TodoListStats } from '~/components/TodoList/Stats'
import { todoAtoms } from '~/store/recoil/todo/atoms'

export const TodoList: React.FC = () => {
  const todoList = useRecoilValue(todoAtoms.todoList)

  return (
    <>
      <TodoListStats />
      <TodoListFilter />
      <TodoItemCreator />
      {todoList.map((elem) => (
        <TodoItem key={elem.id} item={elem} />
      ))}
    </>
  )
}

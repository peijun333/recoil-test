import { useRecoilState } from 'recoil'
import { todoAtoms } from '~/store/recoil/todo/atoms'
import { TodoShowType } from '~/types/Todo'

export const TodoListFilter: React.FC = () => {
  const [filter, setFilter] = useRecoilState(todoAtoms.todoListFilter)

  return (
    <>
      Filter:
      <select value={filter} onChange={({ target: { value } }) => setFilter(value as TodoShowType)}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </>
  )
}

import { useRecoilValue } from 'recoil'
import { todoSelectors } from '~/store/recoil/todo/selectors'

export const TodoListStats: React.FC = () => {
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } = useRecoilValue(
    todoSelectors.todoListStats,
  )

  return (
    <ul>
      <li>Total items: {totalNum}</li>
      <li>Items completed: {totalCompletedNum}</li>
      <li>Items not completed: {totalUncompletedNum}</li>
      <li>Percent completed: {percentCompleted}</li>
    </ul>
  )
}

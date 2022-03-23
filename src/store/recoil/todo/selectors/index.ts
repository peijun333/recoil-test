import { selector } from 'recoil'
import { todoAtoms } from '~/store/recoil/todo/atoms'
import { RecoilSelectorKeys } from '../../keys'

const todoListStats = selector({
  key: RecoilSelectorKeys.TODO_LIST_STATS,
  get: ({ get }) => {
    const todoList = get(todoAtoms.todoList)
    const totalNum = todoList.length
    const totalCompletedNum = todoList.filter((elem) => elem.isComplete).length
    const totalUncompletedNum = totalNum - totalCompletedNum
    const percentCompleted = totalNum === 0 ? 0 : Math.round((totalCompletedNum / totalNum) * 100)

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    }
  },
})

const filteredTodoList = selector({
  key: RecoilSelectorKeys.FILTERED_TODO_LIST,
  get: ({ get }) => {
    const filter = get(todoAtoms.todoListFilter)
    const list = get(todoAtoms.todoList)

    switch (filter) {
      case 'Show Completed':
        return list.filter((elem) => elem.isComplete)
      case 'Show Uncompleted':
        return list.filter((elem) => !elem.isComplete)
      default:
        return list
    }
  },
})

export const todoSelectors = {
  todoListStats,
  filteredTodoList,
}

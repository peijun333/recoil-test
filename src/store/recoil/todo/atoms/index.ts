import { atom } from 'recoil'
import { Todo, TodoShowType } from '~/types/Todo'
import { RecoilAtomKeys } from '~/store/recoil/keys'

const todoList = atom<Todo[]>({
  key: RecoilAtomKeys.TODO_LIST,
  default: [],
})

const todoListFilter = atom<TodoShowType>({
  key: RecoilAtomKeys.TODO_LIST_FILTER,
  default: 'Show All',
})

export const todoAtoms = {
  todoList,
  todoListFilter,
}

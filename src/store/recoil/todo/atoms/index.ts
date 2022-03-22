import { atom } from 'recoil'
import { Todo } from '~/types/Todo'

const todoList = atom<Todo[]>({
  key: 'TodoList',
  default: [],
})

export const todoAtoms = {
  todoList,
}

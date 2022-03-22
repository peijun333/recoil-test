import { useCallback } from 'react'
import { useRecoilState } from 'recoil'
import { todoAtoms } from '~/store/recoil/todo/atoms'

export const useTodoItem = () => {
  const [todoList, setTodoList] = useRecoilState(todoAtoms.todoList)

  const editItemText = useCallback(
    (id: number, newText: string) => {
      const nextState = todoList.map((elem) => {
        if (elem.id !== id) return elem
        return { ...elem, text: newText }
      })
      setTodoList(nextState)
    },
    [setTodoList, todoList],
  )

  const toggleItemCompletion = useCallback(
    (id: number) => {
      const nextState = todoList.map((elem) => {
        if (elem.id !== id) return elem
        return { ...elem, isComplete: !elem.isComplete }
      })
      setTodoList(nextState)
    },
    [setTodoList, todoList],
  )

  const deleteItem = useCallback(
    (id: number) => {
      const nextState = todoList.filter((item) => item.id !== id)
      setTodoList(nextState)
    },
    [setTodoList, todoList],
  )

  return { editItemText, toggleItemCompletion, deleteItem }
}

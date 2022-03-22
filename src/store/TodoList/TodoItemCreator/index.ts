import { useCallback, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { todoAtoms } from '~/store/recoil/todo/atoms'

let id = 0
const getId = () => id++

export const useTodoItemCreator = () => {
  const [text, setText] = useState('')
  const setTodoList = useSetRecoilState(todoAtoms.todoList)

  const addItem = useCallback(() => {
    setTodoList((prev) => [...prev, { id: getId(), text, isComplete: false }])
    setText('')
  }, [setTodoList, text])

  const onChangeText = useCallback((value: string) => {
    setText(value)
  }, [])

  return {
    text,
    addItem,
    onChangeText,
  }
}

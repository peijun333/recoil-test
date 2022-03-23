export interface Todo {
  id: number
  text: string
  isComplete: boolean
}

export type TodoShowType = 'Show All' | 'Show Completed' | 'Show Uncompleted'

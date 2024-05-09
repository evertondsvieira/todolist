import React, { ReactNode } from "react"

interface ContextProps {
  children: ReactNode
}

interface Task {
  id: number
  text: string
  done: boolean
}

interface TaskContextType {
  task: string
  setTask: React.Dispatch<React.SetStateAction<string>>
  taskList: Task[]
  setTaskList: React.Dispatch<React.SetStateAction<Task[]>>
  addTask: () => void
  removeTask: (id: Task['id']) => void
}

const TaskContext = React.createContext({} as TaskContextType)
export const useTaskContext = () => React.useContext(TaskContext)

export const TaskContextProvider = ({children}: ContextProps) => {
  const [task, setTask] = React.useState<string>('')
  const [taskList, setTaskList] = React.useState<Task[]>([])

  const addTask = () => {
    const id = Math.random()
    setTask('')
    setTaskList([...taskList, { id: id, text: task, done: false }])
  }
  
  const removeTask = (id: Task['id']) => {
    const filtered = taskList.filter((task) => task.id !== id)
    setTaskList(filtered)
  }

  const context: TaskContextType = {
    addTask,
    removeTask,
    task,
    setTask,
    taskList,
    setTaskList
  }

  return(
    <TaskContext.Provider value={context}>
      {children}
    </TaskContext.Provider>
  )
}

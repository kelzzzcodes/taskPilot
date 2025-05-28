import { useEffect, useState } from 'react'
import { Button, Modal } from '../../ui'
import { AddTask, Task } from '../../components'

interface TaskType {
  id: string
  title: string
  description: string
  dueDate: string
  isComplete: boolean
}

export const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [tasks, setTasks] = useState<TaskType[]>([])

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks')
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks))
    }
  }, [])

  const updateLocalStorage = (updatedTasks: TaskType[]) => {
    localStorage.setItem('tasks', JSON.stringify(updatedTasks))
    setTasks(updatedTasks)
  }

  const toggleComplete = (id: string) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isComplete: !task.isComplete } : task,
    )
    updateLocalStorage(updatedTasks)
  }

  const deleteTask = (id: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== id)
    updateLocalStorage(updatedTasks)
  }

  const openEditModal = (task: TaskType) => {
    // Handle open modal for edit (You can implement EditTask logic here)
    console.log('Edit', task)
  }

  return (
    <section className="p-4 flex flex-col gap-4">
      <div className="flex justify-end w-[80%] mt-2">
        <Button onClick={() => setIsModalOpen(true)}>Add Task</Button>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <AddTask
          onClose={() => setIsModalOpen(false)}
          refreshTasks={() =>
            setTasks(JSON.parse(localStorage.getItem('tasks') || '[]'))
          }
        />
      </Modal>

      <Task
        tasks={tasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
        openEditModal={openEditModal}
      />
    </section>
  )
}

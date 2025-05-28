import React, { useState } from 'react'
import { Button } from '../../ui'

interface Task {
  id: string
  title: string
  description: string
  dueDate: string
  isComplete: boolean
}

interface AddTaskProps {
  onClose: () => void
  refreshTasks: () => void
}

export const AddTask: React.FC<AddTaskProps> = ({ onClose, refreshTasks }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [dueDate, setDueDate] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (title.trim() === '') {
      alert('Title is required.')
      return
    }

    const newTask: Task = {
      id: `task-${Date.now()}`,
      title,
      description,
      dueDate,
      isComplete: false,
    }

    const existingTasks = JSON.parse(localStorage.getItem('tasks') || '[]')
    existingTasks.push(newTask)
    localStorage.setItem('tasks', JSON.stringify(existingTasks))

    alert('Task added successfully!')
    refreshTasks()
    onClose()

    // Reset form
    setTitle('')
    setDescription('')
    setDueDate('')
  }

  return (
    <div className="text-black flex flex-col gap-4">
      <h2 className="text-xl font-bold">Add Task</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <label className="text-lg">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter Title"
            className="outline-none border-2 border-[#002263] rounded-md p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-lg">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter Description"
            className="outline-none border-2 border-[#002263] rounded-md p-2 h-32"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-lg">Due Date</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="outline-none border-2 border-[#002263] rounded-md p-2"
          />
        </div>
        <div className="flex justify-end mt-2">
          <Button
            type="submit"
            className="bg-[#002263] text-white px-4 py-2 rounded-md"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

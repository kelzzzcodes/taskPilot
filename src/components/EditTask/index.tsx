import { useState } from 'react'

interface TaskType {
  id: string
  title: string
  description: string
  dueDate: string
  isComplete: boolean
}

interface EditTaskProps {
  task: TaskType
  onClose: () => void
  onUpdate: (task: TaskType) => void
}

export const EditTask: React.FC<EditTaskProps> = ({
  task,
  onClose,
  onUpdate,
}) => {
  const [form, setForm] = useState({
    title: task.title,
    description: task.description,
    dueDate: task.dueDate,
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onUpdate({ ...task, ...form })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 text-black flex flex-col gap-4"
    >
      <h2 className="text-xl font-bold">Edit Task</h2>

      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        className="border p-2 rounded"
        required
      />
      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        className="border p-2 rounded"
        required
      />
      <input
        type="date"
        name="dueDate"
        value={form.dueDate}
        onChange={handleChange}
        className="border p-2 rounded"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Save
      </button>
    </form>
  )
}

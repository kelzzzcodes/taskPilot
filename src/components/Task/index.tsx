import React from 'react'

interface Task {
  id: string
  title: string
  description: string
  dueDate: string
  isComplete: boolean
}

interface TaskProps {
  tasks: Task[]
  toggleComplete: (id: string) => void
  deleteTask: (id: string) => void
  openEditModal: (task: Task) => void
}

export const Task: React.FC<TaskProps> = ({
  tasks,
  toggleComplete,
  deleteTask,
  openEditModal,
}) => {
  return (
    <div className="flex flex-col gap-4 text-black">
      {tasks.map((task) => (
        <section
          key={task.id}
          className="bg-yellow-100 grid grid-cols-[auto_0.9fr_auto] gap-4 p-4 rounded-md  items-center w-full md:w-[80%] justify-center m-auto"
        >
          <input
            type="checkbox"
            className="h-8 w-8"
            checked={task.isComplete}
            onChange={() => toggleComplete(task.id)}
          />
          <div
            className={`flex flex-col overflow-hidden ${
              task.isComplete ? 'text-gray-400 line-through' : ''
            }`}
          >
            <ul>
              <li className="font-bold">{task.title}</li>
              <li className="break-words">{task.description}</li>
              <li>{task.dueDate}</li>
            </ul>
          </div>
          <div className="flex gap-2 items-center">
            {!task.isComplete && (
              <div className="flex gap-4 items-center text-xl">
                <span
                  className="cursor-pointer hover:text-blue-500"
                  onClick={() => openEditModal(task)}
                >
                  Edit
                </span>
                <span
                  className=" cursor-pointer hover:text-red-500"
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </span>
              </div>
            )}
          </div>
        </section>
      ))}
    </div>
  )
}

import { useState } from 'react'
import { Button } from '../../components/ui'
import { Modal } from '../../components/ui/Modal' // adjust path if needed

export const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="p-4 flex flex-col gap-4">
      <div className="flex justify-end w-[80%] mt-2">
        <Button onClick={() => setIsModalOpen(true)}>Add Task</Button>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-xl font-bold mb-4 text-black">Add a New Task</h2>
        <p>Put your task form or content here.</p>
      </Modal>
    </section>
  )
}

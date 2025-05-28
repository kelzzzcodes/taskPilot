import { useState } from 'react'
import { Button, Modal } from '../../ui'
import { AddTask } from '../../components'

export const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="p-4 flex flex-col gap-4">
      <div className="flex justify-end w-[80%] mt-2">
        <Button onClick={() => setIsModalOpen(true)}>Add Task</Button>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <AddTask />
      </Modal>
    </section>
  )
}

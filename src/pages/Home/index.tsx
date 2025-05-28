import React from 'react'
import { Button } from '../../components/ui'

export const Home = () => {
  return (
    <section className="p-4 flex flex-col gap-4">
      <div className="flex justify-end w-[80%] mt-2">
        <Button>Add Task</Button>
      </div>
    </section>
  )
}

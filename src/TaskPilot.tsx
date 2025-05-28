import React from 'react'
import { useRoutes } from 'react-router-dom'
import { Navbar } from './components'
import { routes } from './router/routes'

export const TaskPilot = () => {
  const routing = useRoutes(routes)

  return (
    <>
      <Navbar />
      <main className="relative mt-[100px]">{routing}</main>
    </>
  )
}

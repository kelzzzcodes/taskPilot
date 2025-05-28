import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { TaskPilot } from './TaskPilot'

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
  <React.StrictMode>
    <TaskPilot />
  </React.StrictMode>,
)

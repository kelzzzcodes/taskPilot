// src/routes.tsx
import React from 'react'
import { RouteObject } from 'react-router-dom'
import { Home } from '../pages/Home/index'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
]

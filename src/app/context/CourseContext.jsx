import React, { createContext, useReducer } from 'react'
import { courseReducer, initialState } from './courseReducer'

export const CourseContext = createContext()

export const CourseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(courseReducer, initialState)
  return (
    <CourseContext.Provider value={{ state, dispatch }}>
      {children}
    </CourseContext.Provider>
  )
}

import { useEffect, useContext } from 'react'
import { CourseContext } from '../context/CourseContext'
import { fetchCourses } from '../../services/courseService'

export function useCourses() {
  const { dispatch } = useContext(CourseContext)

  useEffect(() => {
    dispatch({ type: 'FETCH_START' })
    fetchCourses()
      .then(data => dispatch({ type: 'FETCH_SUCCESS', payload: data }))
      .catch(error => dispatch({ type: 'FETCH_ERROR', payload: error }))
  }, [dispatch])
}

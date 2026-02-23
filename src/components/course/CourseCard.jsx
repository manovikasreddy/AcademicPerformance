import React, { useContext, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { CourseContext } from '../../app/context/CourseContext'

function CourseCard({ course }) {
  const { dispatch } = useContext(CourseContext)

  const addToSemester = useCallback((semester) => {
    dispatch({ type: 'ADD_COURSE', semester, course })
  }, [dispatch, course])

  return (
    <div className="course-card">
      <h3>{course.name}</h3>
      <p>{course.description}</p>
      <p><strong>Credits:</strong> {course.credits}</p>
      <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', marginTop: '.5rem' }}>
        <button aria-label={`Add ${course.name} to Semester 1`} onClick={() => addToSemester('semester1')}>
          + Sem 1
        </button>
        <button aria-label={`Add ${course.name} to Semester 2`} onClick={() => addToSemester('semester2')}
          style={{ background: '#805ad5' }}>
          + Sem 2
        </button>
        <Link to={`/course/${course.id}`}
          style={{ fontSize: '.83rem', color: '#3182ce', alignSelf: 'center', marginLeft: 'auto' }}>
          Details →
        </Link>
      </div>
    </div>
  )
}

export default React.memo(CourseCard)

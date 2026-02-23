import React, { useContext } from 'react'
import { CourseContext } from '../../app/context/CourseContext'
import CreditSummary from './CreditSummary'

function Semester({ semesterKey, label }) {
  const { state, dispatch } = useContext(CourseContext)
  const courses = state.semesters[semesterKey]

  const remove = (id) => dispatch({ type: 'REMOVE_COURSE', semester: semesterKey, id })

  return (
    <div className="semester-box">
      <h2>{label}</h2>
      {courses.length === 0
        ? <p style={{ color: '#a0aec0', fontStyle: 'italic' }}>No courses added yet.</p>
        : courses.map(c => (
          <div className="semester-item" key={c.id}>
            <span>{c.name} <small style={{ color: '#718096' }}>({c.credits} cr)</small></span>
            <button className="remove-btn" aria-label={`Remove ${c.name}`} onClick={() => remove(c.id)}>✕</button>
          </div>
        ))
      }
      <CreditSummary courses={courses} label={label} />
    </div>
  )
}

export default Semester

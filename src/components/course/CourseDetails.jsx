import React, { useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { CourseContext } from '../../app/context/CourseContext'

function CourseDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { state } = useContext(CourseContext)
  const course = state.courses.find(c => c.id === Number(id))

  if (!course) return <div className="page"><p>Course not found.</p></div>

  return (
    <div className="page">
      <button onClick={() => navigate(-1)}
        style={{ marginBottom: '1rem', background: '#e2e8f0', border: 'none', padding: '.4rem .9rem', borderRadius: '6px', cursor: 'pointer' }}>
        ← Back
      </button>
      <h1>{course.name}</h1>
      <p style={{ color: '#718096', marginBottom: '.5rem' }}>{course.description}</p>
      <p><strong>Credits:</strong> {course.credits}</p>
    </div>
  )
}

export default CourseDetails

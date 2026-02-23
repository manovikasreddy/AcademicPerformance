import React, { useContext, useMemo } from 'react'
import { CourseContext } from '../app/context/CourseContext'

function SummaryPage() {
  const { state } = useContext(CourseContext)
  const { semester1, semester2 } = state.semesters

  const allCourses = useMemo(() => [
    ...semester1.map(c => ({ ...c, semester: 'Semester 1' })),
    ...semester2.map(c => ({ ...c, semester: 'Semester 2' })),
  ], [semester1, semester2])

  const totalCredits = useMemo(() => allCourses.reduce((s, c) => s + c.credits, 0), [allCourses])

  return (
    <div className="page">
      <h1>Academic Summary</h1>
      {allCourses.length === 0
        ? <p style={{ color: '#718096' }}>No courses planned yet. Go to Planner to add courses.</p>
        : (
          <>
            <table className="summary-table">
              <thead>
                <tr><th>Course</th><th>Credits</th><th>Semester</th></tr>
              </thead>
              <tbody>
                {allCourses.map((c, i) => (
                  <tr key={i}>
                    <td>{c.name}</td>
                    <td>{c.credits}</td>
                    <td>{c.semester}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="credit-box" style={{ marginTop: '1rem' }}>
              <strong>Total Credits Planned: {totalCredits}</strong>
            </div>
          </>
        )
      }
    </div>
  )
}

export default SummaryPage

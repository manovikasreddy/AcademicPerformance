import React from 'react'
import Semester from '../components/planner/Semester'

function PlannerPage() {
  return (
    <div className="page">
      <h1>Semester Planner</h1>
      <div className="planner-grid">
        <Semester semesterKey="semester1" label="Semester 1" />
        <Semester semesterKey="semester2" label="Semester 2" />
      </div>
    </div>
  )
}

export default PlannerPage

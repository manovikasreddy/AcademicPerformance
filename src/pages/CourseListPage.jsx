import React, { useContext } from 'react'
import { CourseContext } from '../app/context/CourseContext'
import { useCourses } from '../app/hooks/useCourses'
import CourseCard from '../components/course/CourseCard'
import StudyBackground from '../components/layout/StudyBackground'

function CourseListPage() {
  useCourses()
  const { state } = useContext(CourseContext)
  const { courses, loading, error } = state

  if (loading) return <div className="loading">Loading courses...</div>
  if (error) return <div className="page"><div className="error">❌ {error}</div></div>
  if (courses.length === 0) return <div className="page"><p>No courses available.</p></div>

  return (
    <div className="course-list-page">
      <StudyBackground />
      <div className="page">
        <h1>Available Courses</h1>
        <div className="course-grid">
          {courses.map(course => <CourseCard key={course.id} course={course} />)}
        </div>
      </div>
    </div>
  )
}

export default CourseListPage

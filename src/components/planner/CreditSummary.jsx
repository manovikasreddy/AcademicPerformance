import React, { useMemo } from 'react'

function CreditSummary({ courses, label }) {
  const totalCredits = useMemo(() => courses.reduce((sum, c) => sum + c.credits, 0), [courses])
  const over = totalCredits > 18
  return (
    <div className={`credit-box ${over ? 'over' : ''}`}>
      <strong>{label} Total Credits: {totalCredits}</strong>
      {over && <span style={{ color: '#e53e3e', marginLeft: '.5rem' }}>⚠️ Limit exceeded (max 18)!</span>}
    </div>
  )
}

export default React.memo(CreditSummary)

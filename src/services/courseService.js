export function fetchCourses() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'Mathematics', credits: 4, description: 'Calculus and linear algebra fundamentals.' },
        { id: 2, name: 'Physics', credits: 3, description: 'Mechanics, thermodynamics, and waves.' },
        { id: 3, name: 'Data Structures', credits: 4, description: 'Arrays, trees, graphs, and algorithms.' },
        { id: 4, name: 'Operating Systems', credits: 3, description: 'Processes, memory, and file systems.' },
        { id: 5, name: 'Databases', credits: 3, description: 'SQL, normalization, and transactions.' },
        { id: 6, name: 'Computer Networks', credits: 3, description: 'TCP/IP, routing, and protocols.' },
      ])
    }, 1200)
  })
}

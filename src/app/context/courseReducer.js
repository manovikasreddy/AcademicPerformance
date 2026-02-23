export const initialState = {
  courses: [],
  semesters: { semester1: [], semester2: [] },
  loading: false,
  error: null
}

export function courseReducer(state, action) {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true, error: null }
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, courses: action.payload }
    case 'FETCH_ERROR':
      return { ...state, loading: false, error: action.payload }
    case 'ADD_COURSE':
      return {
        ...state,
        semesters: {
          ...state.semesters,
          [action.semester]: [...state.semesters[action.semester], action.course]
        }
      }
    case 'REMOVE_COURSE':
      return {
        ...state,
        semesters: {
          ...state.semesters,
          [action.semester]: state.semesters[action.semester].filter(c => c.id !== action.id)
        }
      }
    default:
      return state
  }
}

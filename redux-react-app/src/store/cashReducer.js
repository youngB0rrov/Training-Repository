const defaultState = {
    cash: 0
  }
  
  // const action = {type: "", payload: "data here"}
  const ADD_CASH = 'ADD_CASH'
  const GET_CASH = 'GET_CASH'
  
  export const cashReducer = (state = defaultState, action) => {
    switch(action?.type) {
      case ADD_CASH:  
        return {...state, cash: state?.cash + action?.payload}
      case GET_CASH:
        return {...state, cash: (state?.cash <= 0 || state?.cash < action?.payload) ? 0 : state?.cash - action?.payload}
      default:
        return state
    }
  }

const defaultState = {
    customers: []
  }
  
  // const action = {type: "", payload: "data here"}
  const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER'
  const ADD_CUSTOMER = 'ADD_CUSTOMER'
  const FETCH_CUSTOMERS = 'FETCH_CUSTOMERS'
  
  export const customerReducer = (state = defaultState, action) => {
    switch(action?.type) {
      case FETCH_CUSTOMERS:
        return { ...state, customers: [...state.customers, ...action.payload]}
      case ADD_CUSTOMER:  
        return {...state, customers: [...state.customers, action.payload]}
      case REMOVE_CUSTOMER:
        return {...state, customers: state.customers.filter(customer => {
          return customer.id !== action.payload
        })}
      default:
        return state
    }
  }

  export const addCustomerAction = (payload) => {
    return ({ type: ADD_CUSTOMER, payload})
  }

  export const removeCustomerAction = (payload) => {
    return ({ type: REMOVE_CUSTOMER, payload})
  }

  export const fetchCustomersAction = (payload) => {
    return ({ type: FETCH_CUSTOMERS, payload})
  }
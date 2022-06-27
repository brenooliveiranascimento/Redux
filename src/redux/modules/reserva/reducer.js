const INITIAL_VALUE = []

function reserva(state = INITIAL_VALUE, action) {
  console.log(state)
  switch(action.type) {
    case 'ADD_RESERVA':
      return [ ...state, action.trip ];
    default:
      return state;
  }
}

export default reserva;
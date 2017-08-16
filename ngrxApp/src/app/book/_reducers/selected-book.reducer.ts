import * as BookActions from "../_actions/book.actions"

export function selectedBookReducer(state = null, action: BookActions.All){
  switch (action.type){
    case BookActions.SELECT_BOOK:
      return Object.assign({}, state, action.payload)
    default:
      return state;
  }
}

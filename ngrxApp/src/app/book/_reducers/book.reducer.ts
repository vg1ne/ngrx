import * as BookActions from "../_actions/book.actions"

export function bookReducer(state = [], action: BookActions.All){
  switch (action.type){
    case BookActions.ADD_BOOK:
      return [...state, Object.assign(
        {},
        {
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price?action.payload.price:20,
          count: action.payload.count?action.payload.count:3
        })
      ];
    case BookActions.DELETE_BOOK:
      return state.filter(book => book.id!==action.payload.id)
    case BookActions.INIT_ALL_BOOKS:
      if(state.length) return state
      return state.concat(state, action.payload)
    case BookActions.BUY_BOOK:
      return state.map((item => {
        if(item.id == action.payload.id){
          item.count--
        }
        return item;
      }))
    default:
      return state;
  }
}

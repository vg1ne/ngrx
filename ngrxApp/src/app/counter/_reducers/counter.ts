import * as CounterActions from "../_actions/counter"

export function counterReducer(state: number = 0, action: CounterActions.All){
  switch (action.type){
    case CounterActions.INCREMENT:
      return state + 1;
    case CounterActions.DECREMENT:
      return state - 1;
    case CounterActions.RESET:
      return 0;
    case CounterActions.INCREMENTBYARG:
      return state + action.payload;
    default:
      return state;
  }
}

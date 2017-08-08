import {Action} from "@ngrx/store"

export const INCREMENT = '[Counter] INCREMENT'
export const DECREMENT = '[Counter] DECREMENT'
export const RESET = '[Counter] RESET'
export const INCREMENTBYARG = '[Counter] INCREMENTBYARG'

export class IncrementAction implements Action{
  readonly type = INCREMENT
}
export class DecrementAction implements Action{
  readonly type = DECREMENT
}
export class ResetAction implements Action{
  readonly type = DECREMENT
}
export class IncrementByArgAction implements Action{
  readonly type = INCREMENTBYARG
  constructor(public payload: number){}
}

export type Actions =
  | IncrementAction
  | DecrementAction
  | ResetAction
  | IncrementByArgAction


export function counterReducer(state: number = 0, action: Action){
  switch (action.type){
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case RESET:
      return 0;
    case INCREMENTBYARG:
      return state;
    default:
      return state;
  }
}

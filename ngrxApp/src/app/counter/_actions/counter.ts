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
  readonly type = RESET
}
export class IncrementByArgAction implements Action{
  readonly type = INCREMENTBYARG
  constructor(public payload: number){}
}

export type All =
  | IncrementAction
  | DecrementAction
  | ResetAction
  | IncrementByArgAction

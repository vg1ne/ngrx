import {Action} from "@ngrx/store"

export const SELECT_TAB = '[App] SELECT_TAB'

export class SelectTab implements Action{
  readonly type = SELECT_TAB
  constructor(public payload: number){}
}
export type All =
  | SelectTab


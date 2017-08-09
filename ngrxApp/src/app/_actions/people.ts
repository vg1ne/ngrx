import {Action} from "@ngrx/store"
import {Person} from "../_models/person.model"

export const ADD_PERSON = '[People] ADD_PERSON'
export const REMOVE_PERSON = '[People] REMOVE_PERSON'
export const ADD_GUEST = '[People] ADD_GUEST'
export const REMOVE_GUEST = '[People] REMOVE_GUEST'
export const TOGGLE_ATTENDING = '[People] TOGGLE_ATTENDING'

export class AddPersonAction implements Action{
  readonly type = ADD_PERSON
  constructor(public payload: Person){}
}
export class RemovePersonAction implements Action{
  readonly type = REMOVE_PERSON
  constructor(public payload: Person){}
}
export class AddGuestAction implements Action{
  readonly type = ADD_GUEST
}
export class RemoveGuestAction implements Action{
  readonly type = REMOVE_GUEST
}
export class ToggleAttendingAction implements Action{
  readonly type = TOGGLE_ATTENDING
}

export type All =
  | AddPersonAction
  | RemovePersonAction
  | AddGuestAction
  | RemoveGuestAction
  | ToggleAttendingAction

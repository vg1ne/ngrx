import {Action} from "@ngrx/store"
import {Book} from "../_models/book.model"

export const ADD_BOOK = '[Book] ADD_BOOK'
export const REMOVE_BOOK = '[Book] REMOVE_BOOK'
export const INIT_ALL_BOOKS = '[Book] INIT_ALL_BOOKS'
export const BUY_BOOK = '[Book] BUY_BOOK'

export class AddBook implements Action{
  readonly type = ADD_BOOK
  constructor(public payload: Book){}
}
export class RemoveBook implements Action{
  readonly type = REMOVE_BOOK
  constructor(public payload: Book){}
}
export class InitAll implements Action{
  readonly type = INIT_ALL_BOOKS
  constructor(public payload: Book[]){}
}
export class BuyBook implements Action{
  readonly type = BUY_BOOK
  constructor(public payload: Book){}
}
export type All =
  | AddBook
  | RemoveBook
  | InitAll
  | BuyBook


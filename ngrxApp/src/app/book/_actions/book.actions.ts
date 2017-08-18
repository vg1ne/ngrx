import {Action} from "@ngrx/store"
import {Book} from "../_models/book.model"

export const ADD_BOOK = '[Book] ADD_BOOK'
export const DELETE_BOOK = '[Book] DELETE_BOOK'
export const INIT_ALL_BOOKS = '[Book] INIT_ALL_BOOKS'
export const BUY_BOOK = '[Book] BUY_BOOK'
export const SELECT_BOOK ='[Book] SELECT_BOOK'
export const UPDATE_BOOK = '[Book] UPDATE_BOOK'
export const REMOVE_BOOK_FROM_BASKET = '[Book] REMOVE_BOOK_FROM_BASKET'

export class AddBook implements Action{
  readonly type = ADD_BOOK
  constructor(public payload: Book){}
}
export class DeleteBook implements Action{
  readonly type = DELETE_BOOK
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
export class SelectBook implements Action{
  readonly type = SELECT_BOOK
  constructor(public payload: Book){}
}
export class UpdateBook implements Action{
  readonly type = UPDATE_BOOK
  constructor(public payload: Book){}
}
export class RemoveFromBasket implements Action{
  readonly type = REMOVE_BOOK_FROM_BASKET
  constructor(public payload: string){}
}
export type All =
  | AddBook
  | DeleteBook
  | InitAll
  | BuyBook
  | SelectBook
  | UpdateBook
  | RemoveFromBasket


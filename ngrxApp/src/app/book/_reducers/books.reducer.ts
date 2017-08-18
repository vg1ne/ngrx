import * as BookActions from "../_actions/book.actions"
import {BooksStore} from "../_components/books-list/books-list.component";
import {Book} from "../_models/book.model";
import { createSelector } from '@ngrx/store';
import 'rxjs'

export function bookReducer(state = [], action: BookActions.All){
  switch (action.type){
    case BookActions.ADD_BOOK:
      return [...state, Object.assign(
        {},
        {
          name: action.payload.name,
          price: action.payload.price?action.payload.price:20,
          count: action.payload.count?action.payload.count:3
        })
      ];
    case BookActions.DELETE_BOOK:
      return state.filter(book => book._id!==action.payload._id)
    case BookActions.INIT_ALL_BOOKS:
      if(state.length) return state
      return state.concat(state, action.payload)
    case BookActions.BUY_BOOK:
      return state.map((item => {
        if(item._id == action.payload._id){
          item.bought++;
        }
        return item;
      }))
    case BookActions.UPDATE_BOOK:
      let index = state.map(book => book._id).indexOf(action.payload._id);
      return [
        ...state.slice(0, index),
        Object.assign({}, action.payload),
        ...state.slice(index + 1)
      ]
    default:
      return state;
  }
}

export const selectBooksFeature = (state: BooksStore) => state.books
export const selectBooksInBasket = createSelector(selectBooksFeature,
  (state: Book[]) => state.filter(item => {
    return item.bought > 0
  }));


import {Book} from "./_models/book.model";

const initialArray = [
  {id: 1, name: "Tarzan", count: 32, price: 12},
  {id: 2, name: "Баба галамага", count: 3, price: 4},
  {id: 3, name: "Война и Мир", count: 3, price: 51}
]

export const Books:Book[] = initialArray.map(item=>item)

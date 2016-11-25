/**
 * Actions
 */

import * as types from './actions';

export function selectBook(book) {
  console.log(`A book is selected: ${book.title}`);
  return {
    type: types.BOOK_SELECTED,
    payload: book
  }
}

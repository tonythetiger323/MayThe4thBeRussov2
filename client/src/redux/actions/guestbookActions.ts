import * as types from './index'
import API from '../../utils/API'

export function retrieveCommentData(comments: string) {
  return {
    type: types.RETRIEVE_COMMENT_DATA,
    payload: comments,
  };
}

// export function fetchComments() {
//   return async dispatch => {
//     const comments = [];
//     await API.getComments()
//   }
// }  
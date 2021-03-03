import {action, PostsActionTypes } from './postsActions'

export interface PostsState {
  posts: any[]
}

const initialCounterState = {
  posts: [],
}

/**
 * Counter Reducer
 */
export const postsReducer = (
  state: PostsState = initialCounterState,
  action: action
) => {
  switch (action.type) {
    case PostsActionTypes.POST_REQUEST:
      return {
        ...state,
      }
    case PostsActionTypes.POST_SUCCESS:
      return {
        ...state,
        posts:action.posts,
      }
    case PostsActionTypes.POST_FAILURE:
      return initialCounterState
    default:
      return state
  }
}

import { postServices } from '@services/index';

export enum PostsActionTypes {
  POST_REQUEST= 'POST_REQUEUST',
  POST_SUCCESS = 'POST_SUCCESS',
  POST_FAILURE = 'POST_FAILURE',
}


export const postsActionCreators = {
  postsRequest: () => ({
    type: PostsActionTypes.POST_REQUEST,
  }),
  postsSuccess: (posts: any) => ({
    type: PostsActionTypes.POST_SUCCESS,
    posts,
  }),
 postsFailure: (error: string) => ({
    type: PostsActionTypes.POST_FAILURE,
    error,
  }),
}

export type action = {
  type:PostsActionTypes;
  posts: any;
  error: string | string[] | undefined;
};


export const postsActions = {
  GetAllPost: () => {
    return (dispatch: Function) => {
      dispatch(postsActionCreators.postsRequest());
      postServices.Posts().then(
        (res:any) => {
          dispatch(postsActionCreators.postsSuccess(res.data));
        },
        (error:any) => {
          dispatch(postsActionCreators.postsFailure(error));
        }
      );
    };
  }

}
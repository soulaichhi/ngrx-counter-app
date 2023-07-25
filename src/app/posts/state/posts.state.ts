import {Post} from "../../models/post.model";

export interface PostsState {
  posts: Post[];
}

export const initialState: PostsState = {
  posts: [
    {
      id: "1",
      title: 'Sample 1',
      description: "some description 1"
    },
    {
      id: "2",
      title: 'Sample 2',
      description: "some description 2"
    },
    {
      id: "3",
      title: 'Sample 3',
      description: "some description 3"
    }
  ]
}

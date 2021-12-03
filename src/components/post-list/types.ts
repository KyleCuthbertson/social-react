
export interface postProps {
  users: {
    id: string,
    email: string,
    firstName: string,
    lastName: string,
    listOfPosts: Array<Object>
  }[],
  posts: {
    body: string,
    commentCount: number,
    dateCreated: number,
    docId: string,
    likeCount: number,
    userHandle: string,
    userId: string,
    userImage?: string | undefined
  }[]
}
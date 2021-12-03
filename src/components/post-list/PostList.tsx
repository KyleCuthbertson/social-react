
import Posts from "./Posts";
import { postProps } from "./types";

const PostList = (props: postProps) => {

  const { users, posts } = props; 

  return (
    <>
      <div className="posts-list-wrapper">
        <ul id="post-list" className="posts-list">
          <Posts users={users} posts={posts}/>
        </ul>
      </div>
    </>
  )
}

export default PostList;

import { type } from "os";
import Posts from "./Posts";

const PostList = (props: any) => {

  const { users } = props; 

  return (
    <>
      <div className="posts-list-wrapper">
        <ul id="post-list" className="posts-list">
          <Posts users={users}/>
        </ul>
      </div>
    </>
  )
}

export default PostList;
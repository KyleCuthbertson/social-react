import defaultPicture from "../../assets/images/defaultProfile.jpeg";
import defaultPostPicture from "../../assets/images/defaultPostImage.jpeg";


const Posts = (props: any) => {

  const { users, posts } = props;

  users.map((user: { listOfPosts: Array<Object>; id: string }) => {
    return user.listOfPosts = posts.filter(((post: { userId: string; }) => post.userId === user.id));
  })

  const unixConversion = (dt: number) => {
    const dateObject = new Date(dt);
    return dateObject.toLocaleDateString();
  }

  return (
    <>
    {
    users.map((user: any) => (
      user.listOfPosts.map((post: any) => (
      <li key={post.dateCreated}>
        <p className="post-date">{unixConversion(post.dateCreated)}</p>
        <div className="upper-post">
          <img alt="post-author" id="author-picture" src={user.profilePicture || defaultPicture}/>
          <p className="post-author">
            {user.firstName + " " + user.lastName}
          </p>
        </div>
        <div className="mid-post">
          {(post.userImage !== null || post.userImage === "" ) ? <img className="post-img" alt="landscape" src={defaultPostPicture}/> : ""}
          <p className="post-text">
            {post.body} 
          </p>
        </div>
        <div className="lower-post">
          <button title="like"><i className="far fa-heart"></i>{post.likeCount}</button>
          <button title="comment"><i className="fas fa-comment-dots"></i>{post.commentCount}</button>
        </div>
      </li>
      ))
    ))
    }  
    </>
  )
}

export default Posts;
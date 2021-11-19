
const Posts = (props: any) => {

  const { users } = props;

  return (
    <>
    {
    users.map((user: any) => (
      <li key={user.userId} className={(user.posts[0].content.image !== null ) ? "picture" : "non-picture"}>
        <p className="post-date">{user.posts[0].dateOfPost}</p>
        <div className="upper-post">
          <img alt="post-author" id="author-picture" src={user.profilePicture}/>
          <p className="post-author">
            {user.firstName + " " + user.lastName}
          </p>
        </div>
        <div className="mid-post">
          {(user.posts[0].content.image !== null ) ? <img className="post-img" alt="landscape" src={user.posts[0].content.image}/> : ""}
          <p className="post-text">
            {user.posts[0].content.text} 
          </p>
        </div>
        <div className="lower-post">
          <button><i className="far fa-heart"></i>{user.posts[0].likes}</button>
          <button><i className="fas fa-comment-dots"></i>{user.posts[0].comments}</button>
        </div>
      </li>
    ))
    }  
    </>
  )
}

export default Posts;
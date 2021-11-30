import defaultPicture from "../../assets/images/defaultProfile.jpeg";
import defaultPostPicture from "../../assets/images/defaultPostImage.jpeg";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Posts = (props: any) => {

  const { users, posts } = props;

  const { currentUser }: any = useAuth();
  const navigate = useNavigate();

  users.map((user: { listOfPosts: Array<Object>; id: string }) => {
    return user.listOfPosts = posts.filter(((post: { userId: string; }) => post.userId === user.id)); 
  })
  

  let userPosts: any[] = [];

  users.map((user: { listOfPosts: Array<Object>, id: string }) => {
    user.listOfPosts.map((post: any) => {
      return userPosts.push(post);
    });
  })

  // Sorts posts by date created (newest posts at top)
  let newResults = userPosts.sort((a, b) => {
    return b.dateCreated - a.dateCreated;
  });


  // Converts to time and date for each post
  const unixConversion = (dt: number, time: boolean) => {
    const dateObject = new Date(dt);
    return time ? `${dateObject.getHours()}:${(dateObject.getMinutes() < 10 ? "0" : "") + dateObject.getMinutes()}` : dateObject.toLocaleDateString()
  }

  // Retrieves first and last name depending on the post's author
  const getUserData = (userId: string) => {
    for (let i = 0; i <= users.length; i++) {
      if (users[i].id === userId) {
        return users[i].firstName + " " + users[i].lastName;
      }
    }
  }

  const editPost = (id: string, text: string) => {
    navigate('./editpost', { state:{ docId: id, bodyText: text }});
  }

  return (
    <>
    {
    newResults.map((post: any) => (
      <li key={post.dateCreated}>
        <div className="post-date">
          <p>{unixConversion(post.dateCreated, false) + " - " + unixConversion(post.dateCreated, true)}</p>
        </div>

        {
        (currentUser.uid === post.userId) ? 
        <div className="post-controls">
          <button onClick={() => editPost(post.docId, post.body)}><i className="fas fa-edit"></i></button>
        </div>
        : 
        undefined
        }
        
        <div className="upper-post">
          <img alt="post-author" id="author-picture" src={defaultPicture}/>
          <p className="post-author">
            {getUserData(post.userId)}
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
    }  
    </>
  )
}

export default Posts;
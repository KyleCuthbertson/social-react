import { db } from "../../utils/firebaseConfig";

import defaultPicture from "../../assets/images/defaultProfile.jpeg";
import defaultPostPicture from "../../assets/images/defaultPostImage.jpeg";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { postProps } from "./types";
import { unixConversion } from "../../utils/unixConversion";

const Posts = (props: postProps) => {

  const { users, posts } = props;


  const { currentUser }: any = useAuth();
  const navigate = useNavigate();

  users.map((user: { listOfPosts: Array<Object>; id: string }) => {
    return user.listOfPosts = posts.filter(((post: { userId: string; }) => post.userId === user.id)); 
  })

  let userPosts: postProps["posts"] = [];

  users.map((user: { listOfPosts: Array<Object>, id: string }) => {
    return user.listOfPosts.map((post: any) => {
      return userPosts.push(post);
    });
  })

  // Sorts posts by date created (newest posts at top)
  let newResults = userPosts.sort((a, b) => {
    return b.dateCreated - a.dateCreated;
  });

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



  const likePost = async (userId: string, docId: string) => {

    const getLikeArray = (await db.collection('posts')
    .doc(docId)
    .get())
    .data();
    
    if (getLikeArray) {
      const likeArray = getLikeArray.listOfLikes;
      const likeCount = getLikeArray.likeCount;
      const index = likeArray.indexOf(userId);

      if (likeArray.includes(userId)) {
        likeArray.splice(index, 1);
        await db.collection('posts').doc(docId).update({
          likeCount: likeCount - 1,
          listOfLikes: [...likeArray]
        })
        .then(() => {
          console.log("Succesfully unliked the post");
        })
        .catch(() => {
          console.error("Unable to unlike post");
        })
      } else {
        await db.collection('posts').doc(docId).update({
          likeCount: likeCount + 1,
          listOfLikes: [...likeArray, userId]
        })
        .then(() => {
          console.log("Successfully liked the post");
        })
        .catch(() => {
          console.error("Unable to like post");
        })
      } 

      const newLikeCount = (await db.collection('posts')
      .doc(docId)
      .get())
      .data();

      if (newLikeCount) {
        getNumber(newLikeCount.likeCount);
      }
    }
  }

  const getNumber = (value: number | undefined) => {
    return value;
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
          <button onClick={() => likePost(currentUser.uid, post.docId)} 
          title="like">
            {
              post.listOfLikes.includes(currentUser.uid) ? <i className="fa fa-heart"></i> : <i className="far fa-heart"></i>
            }
            {getNumber(post.likeCount)}</button>
          <button title="comment"><i className="fas fa-comment-dots"></i>{post.commentCount}</button>
        </div>
      </li>
    ))
    }  
    </>
  )
}

export default Posts;
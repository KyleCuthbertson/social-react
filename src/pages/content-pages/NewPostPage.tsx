import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { db } from "../../utils/firebaseConfig";
import { useNavigate } from "react-router-dom";

const NewPostPage = () => {

  const [newPostText, setNewPostText] = useState("");
  const [loading, setLoading] = useState(false);

  const { currentUser }: any = useAuth();
  const navigate = useNavigate();

  const handleClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    return await db.collection('posts')
    .doc()
    .set({
      body: newPostText,
      dateCreated: Date.now(),
      commentCount: 0,
      likeCount: 0,
      userHandle: currentUser.email,
      userId: currentUser.uid,
      userImage: "" 
    }).then(() => {
      navigate("../");
    })
  }

  return (
    <>
      <h2 className="newpost-title">Create New Post</h2>
      <form id="newpost-form" onSubmit={handleClick} className="newpost-form">
        <textarea onChange={(e) => setNewPostText(e.target.value)} className="newpost-text" placeholder="Type here..." required></textarea>
        {/* <div className="image-upload-wrapper">
          <span>Upload image</span>
          <input type="file" id="img" name="img" accept="image/*"/>
        </div> */}
        <button className="post-btn" type="submit">{loading ? <i className="fas fa-circle-notch loading-icon"></i> : <span>Create Post</span>}</button>
      </form>
    </>
  )
}

export default NewPostPage;
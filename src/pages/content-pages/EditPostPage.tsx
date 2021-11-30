import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { db } from "../../utils/firebaseConfig";
import { useNavigate, useLocation } from "react-router-dom";


const EditPostPage = () => {

  const location = useLocation();

  const [editPostText, setEditPostText] = useState("");
  const [loading, setLoading] = useState(false);

  const { currentUser }: any = useAuth();

  const navigate = useNavigate();

  const handleClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
  
    return await db.collection('posts')
    .doc(location.state.docId)
    .update({
      body: editPostText
    }).then(() => {
      navigate("../");
    })
  }

  const handleDelete = async () => {
    setLoading(true);

    return await db.collection('posts')
    .doc(location.state.docId)
    .delete()
    .then(() => {
      navigate("../");
    })
  }

  return (
    <>
      <h2 className="newpost-title">Edit Post</h2>
      <form id="newpost-form" onSubmit={handleClick} className="newpost-form">
        <textarea defaultValue={location.state.bodyText} onChange={(e) => setEditPostText(e.target.value)} className="newpost-text" placeholder="Type here..." required></textarea>
        <button className="post-btn" type="submit">{loading ? <i className="fas fa-circle-notch loading-icon"></i> : <span>Update</span>}</button>
        <button className="delete-btn" onClick={handleDelete} type="button">{loading ? <i className="fas fa-circle-notch loading-icon"></i> : <span>Delete Post <i className="fas fa-trash"></i></span>}</button>
      </form>
    </>
  )
}

export default EditPostPage;
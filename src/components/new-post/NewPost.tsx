import { useNavigate } from "react-router-dom";


const NewPost = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    return navigate("/newpost");
  }

  return (
    <>
      <div className="newpost-wrapper">
        <button className="newpost-btn" onClick={handleClick} title="Create new post"><i className="fas fa-plus"></i> Create New Post</button>
      </div>
    </>
  )
}

export default NewPost;
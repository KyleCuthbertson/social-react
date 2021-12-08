
import { useState, useEffect } from "react";

import PostList from "../../components/post-list/PostList";
// import Messages from "../../components/messages/Messages";
import NewPost from "../../components/new-post/NewPost";

import { db } from "../../utils/firebaseConfig";

interface mainWrapperProps {
  selectedContent: string
}

const MainWrapper = (props: mainWrapperProps) => {

  // const { selectedContent } = props;

  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<any>([]);
  const [users, setUsers] = useState<any>([]);
  const postResults: any[] = [];
  const userResults: any[] = [];

  // const ChangeContent = () => {
  //   if (selectedContent === 'home') {
      
  //   } else if (selectedContent === 'search') {
  //     return <PostList users={users} posts={posts}/>
  //   } else {
  //     return <Messages />
  //   }
  // }

  useEffect(() => {
    
    db.collection("posts").onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc: any) => {
        const document = doc.data();
        document.docId = doc.id;
        postResults.push(document);
      })

      let newResults = postResults.sort(function(a, b) {
        return b.dateCreated - a.dateCreated;
      });
      setPosts(newResults);
    })

    db.collection("users").onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc: any) => {
        userResults.push(doc.data());
      })
      setUsers(userResults);
      setLoading(false);
    })    

    
    window.scrollTo(0, 0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <main>
        <div className="main-content-wrapper">
        {
          loading ? 
          <div className="main-content-loading"><i className="fas fa-circle-notch loading-icon"></i></div> : 
          <>
            <NewPost/>
            {posts && <PostList users={users} posts={posts}/>}
          </>
        }
        </div>
      </main>
    </>
  )
}

export default MainWrapper;
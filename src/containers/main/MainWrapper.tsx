
import { useEffect } from "react";

import PostList from "../../components/post-list/PostList";
import Messages from "../../components/messages/Messages";

import Profile1 from '../../assets/images/profile-1.png';
import Profile2 from '../../assets/images/profile-2.png';
import Profile3 from '../../assets/images/profile-3.png';

interface mainWrapperProps {
  selectedContent: string
}

const MainWrapper = (props: mainWrapperProps) => {

  const { selectedContent } = props;

  const dummyUsers = [
    {
      userId: 1,
      firstName : "Kyle",
      lastName : "Cuthbertson",
      profilePicture : Profile1,
      posts : [
        {
          postId : 1,
          dateOfPost : "24/08/21", 
          content : {
            text : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
            image : null
          },
          likes : 122,
          comments : 13
        }
      ]
    },
    {
      userId: 2,
      firstName : "John",
      lastName : "Doe",
      profilePicture : Profile2,
      posts : [
        {
          postId : 2,
          dateOfPost : "21/05/21", 
          content : {
            text : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
            image : "https://llandscapes-10674.kxcdn.com/wp-content/uploads/2019/07/lighting.jpg"
          },
          likes : 2,
          comments : 6
        }
      ]
    },
    {
      userId: 3,
      firstName : "Jane",
      lastName : "Townsend",
      profilePicture : Profile3,
      posts : [
        {
          postId : 3,
          dateOfPost : "19/03/21", 
          content : {
            text : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
            image : null
          },
          likes : 55,
          comments : 10
        }
      ]
    },
  ]

  const ChangeContent = () => {
    if (selectedContent === 'home') {
      return <PostList users={dummyUsers}/>
    } else if (selectedContent === 'search') {
      return <PostList users={dummyUsers}/>
    } else {
      return <Messages />
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main>
        <div className="main-content-wrapper">
          <ChangeContent/>
        </div>
      </main>
    </>
  )
}

export default MainWrapper;
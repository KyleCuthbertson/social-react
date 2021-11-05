
import Profile1 from '../../assets/images/profile-1.png';
import Profile2 from '../../assets/images/profile-2.png';
import Profile3 from '../../assets/images/profile-3.png';

const Messages = () => {
  
  return (
    <>
      <div className="messages-wrapper">
        <div className="messages-title">
          <h2>Messages</h2>
        </div>
        <ul id="messages-list" className="messages-list">
          <li>
            <div className="message-author">
              <img src={Profile1} className="message-profile-picture" alt="profilePicture"/>
            </div>
            <div className="message-details-wrapper">
              <span className="message-author-name">Kyle Cuthbertson</span>
              <div className="message-preview">Yes! That sounds like a great idea! Let's discuss closer to the time</div>
            </div>
          </li>
          <li>
            <div className="message-author">
              <img src={Profile2} className="message-profile-picture" alt="profilePicture"/>
            </div>
            <div className="message-details-wrapper">
              <span className="message-author-name">John Doe</span>
              <div className="message-preview">I can't believe it's been this long until I finally realised that! It's hilarious</div>
            </div>
          </li>
          <li>
            <div className="message-author">
              <img src={Profile3} className="message-profile-picture" alt="profilePicture"/>
            </div>
            <div className="message-details-wrapper">
              <span className="message-author-name">Jane Townsend</span>
              <div className="message-preview">What time do you think that'll be? Lol, can't really decide what I want to eat</div>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Messages;
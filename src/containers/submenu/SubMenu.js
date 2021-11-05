

const SubMenu = (props) => {

  const { setContent, selectedContent } = props;

  return (
    <>
      <div className="submenu-wrapper">
        <ul>
          <li onClick={() => {setContent('home')}} className={(selectedContent === 'home') ? "active" : null}><i className="fas fa-th"></i></li>
          <li onClick={() => {setContent('search')}} className={(selectedContent === 'search') ? "active" : null}><i className="fas fa-search-location"></i></li>
          <li onClick={() => {setContent('messages')}} className={(selectedContent === 'messages') ? "active" : null}><i className="fas fa-envelope"></i></li>
        </ul>
      </div>
    </>
  )
}

export default SubMenu;
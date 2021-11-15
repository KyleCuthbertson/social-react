

interface SubMenuProps {
  setContent: Function,
  selectedContent: string
}

const SubMenu = (props: SubMenuProps) => {

  const { setContent, selectedContent } = props;

  return (
    <>
      <div className="submenu-wrapper">
        <ul>
          <li onClick={() => {setContent('home')}} className={(selectedContent === 'home') ? "active" : undefined}><i className="fas fa-th"></i></li>
          <li onClick={() => {setContent('search')}} className={(selectedContent === 'search') ? "active" : undefined}><i className="fas fa-search-location"></i></li>
          <li onClick={() => {setContent('messages')}} className={(selectedContent === 'messages') ? "active" : undefined}><i className="fas fa-envelope"></i></li>
        </ul>
      </div>
    </>
  )
}

export default SubMenu;
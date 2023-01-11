import './header.css'
function Header() {
  return (
    <>
      <header>
        <div className="menu_container">
          <div className="util_menu">
            <ul>
              <li><a href="#">LOGIN</a></li>
              <li><a href="#">JOIN</a></li>
              <li><a href="#">ENG</a></li>
            </ul>
          </div>
          <div className="nav_bar">
            <a href=""><img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="로고" className="logo" /></a>
            <ul className="nav">
              <li><a href="#">회사소개</a></li>
              <li><a href="#">사업소개</a></li>
              <li><a href="#">제품소개</a></li>
              <li><a href="#">커뮤니티</a></li>
              <li><a href="#">고객센터</a></li>
            </ul>
          </div>
        </div>
      </header>
      <div className="div"></div>
    </>
  );
}

export default Header;
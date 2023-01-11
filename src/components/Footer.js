function Footer() {
  return (
    <>
      <footer id="footer">
        {/* 링크 */}
        <div className="link_wrap">
          <div className="container">
            <div className="footer_logo"><img src="" alt="로고" /></div>
            <div className="footer_util">
              <ul>
                <li><a href="#">회사소개</a></li>
                <li><a href="#">개인정보처리방침</a></li>
                <li><a href="#">관리자 페이지</a></li>
              </ul>
            </div>
            <div className="footer_select">
              <span className="placeholder">패밀리 사이트</span>
              <ul>
                <li>카페24</li>
                <li>디자인센터</li>
                <li>네이버</li>
              </ul>
            </div>
          </div>
        </div>
          {/* 저작권 */}
        <div className="copyright_wrap">
          <div className="container">
            <div className="copyright">
              <ul>
                <li>상호 : DESIGN COCO</li>
                <li>주소 : 대구광역시 ooo oooo</li>
                <li>TEL : 010-1234-5678</li>
                <li>사업자 등록번호 : 511-53-00340</li>
                <li className="copy_end">Copyright(c) DESIGN COCO. All Rights Reserved. </li>
              </ul>
            </div>
            <div className="sns">
              <ul>
                <li><a href="https://twitter.com" className="twitter"></a></li>
                <li><a href="https://facebook.com" className="facebook"></a></li>
                <li><a href="https://instagram.com" className="instagram"></a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="top_icon">
        <a href="#top"><span></span>TOP</a>
      </div>
    </>
  );
}

export default Footer;
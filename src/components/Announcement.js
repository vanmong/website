import "./announcement.css";

function Announcement() {
  return (
    <>
    {/* 공지사항 */}
       <section className="announcement">
        <div className="container">
          {/* 최상단 */}
          <h2>공지사항</h2>
          <p>디자인 코코의 새로운 소식을 전해드립니다.</p>
          {/* 테이블 */}
          <table className="output_table">
            <tbody>
              <tr>
                <td><a href="">ㆍ 디자인 코코의 공지사항 테스트글입니다.</a></td>
                <td>2018-01-05</td>
              </tr>
              <tr>
                <td><a href="">ㆍ 디자인 코코의 공지사항 테스트글입니다.</a></td>
                <td>2018-01-05</td>
              </tr>
              <tr>
                <td><a href="">ㆍ 디자인 코코의 공지사항 테스트글입니다.</a></td>
                <td>2018-01-05</td>
              </tr>
              <tr>
                <td><a href="">ㆍ 디자인 코코의 공지사항 테스트글입니다.</a></td>
                <td>2018-01-05</td>
              </tr>
              <tr>
                <td><a href="">ㆍ 디자인 코코의 공지사항 테스트글입니다.</a></td>
                <td>2018-01-05</td>
              </tr>
            </tbody>
          </table>
        </div>
       </section>
    </>
  );
}

export default Announcement;
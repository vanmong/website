import "./customer.css"
import Map from "./Map";

function Customer() {
  return (
    <>
    {/* 고객상담 */}
      <section className="cs">
        <div className="container">
          <h2>고객상담</h2>
          <p>디자인코코의 새로운 소식을 전해드립니다.</p>
          {/* 지도 */}
          <div className="API"><Map /></div>
          <div className="info">
            <dl>
              <dt>주소</dt>
              <dd>대구광역시 ooo oooo</dd>
              <dt>전화</dt>
              <dd>010-1234-5678</dd>
              <dt>vortm</dt>
              <dd>012-345-6789</dd>
              <dt>상담시간</dt>
              <dd>09:00~18:00 (주말, 공휴일 휴무)</dd>
              <dt>문의메일</dt>
              <dd>designcoco_c@naver.com</dd>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}

export default Customer;
function Service() {
  return (
    <>
    {/* 서비스 */}
      <section className="service">
        <div className="container">
          <h2>SERVICE</h2>
          <p>최고의 prestige와 공간가치를 창조하는 global partner, 건축물과 주변환경을 생각하는 개발 소비자의 품격 있는 삶을 위한 주거문화 창달에 노력하고 있습니다.</p>
          <ul className="service_item">
            {/* 첫번째 배너 */}
            <li>
              <div className="service_img">
                <figure>
                  <img src="" alt="" />
                </figure>
              </div>
              <div className="servic_txt">
                <h4>플랫폼</h4>
                <p>소비자의 품격 있는 삶을 위한 주거문화 창달에 노력하고 있습니다.</p>
              </div>
              <div className="btn">
                <a href="" className="service_btn">DETAIL VIEW</a>
              </div>
            </li>
            {/* 두번째 배너 */}
            <li>
              <div className="service_img">
                <figure>
                  <img src="" alt="" />
                </figure>
              </div>
              <div className="servic_txt">
                <h4>솔루션</h4>
                <p>소비자의 품격 있는 삶을 위한 주거문화 창달에 노력하고 있습니다.</p>
              </div>
              <div className="btn">
                <a href="" className="service_btn">DETAIL VIEW</a>
              </div>
            </li>
            {/* 세번째 배너 */}
            <li>
              <div className="service_img">
                <figure>
                  <img src="" alt="" />
                </figure>
              </div>
              <div className="servic_txt">
                <h4>서비스</h4>
                <p>소비자의 품격 있는 삶을 위한 주거문화 창달에 노력하고 있습니다.</p>
              </div>
              <div className="btn">
                <a href="" className="service_btn">DETAIL VIEW</a>
              </div>
            </li>
            {/* 네번째 배너 */}
            <li>
              <div className="service_img">
                <figure>
                  <img src="" alt="" />
                </figure>
              </div>
              <div className="servic_txt">
                <h4>기술지원</h4>
                <p>소비자의 품격 있는 삶을 위한 주거문화 창달에 노력하고 있습니다.</p>
              </div>
              <div className="btn">
                <a href="" className="service_btn">DETAIL VIEW</a>
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/* 브랜드스토리 */}
      <section className="brand">
        <div className="container">
          <div className="txt">
            <h3>BRAND STORY</h3>
            <p>사람과의 긍정적인 호흡을 할 수 있는 자연의 재료로 만드는 것, 인체에 유해한 화학품을 사용하지 않는 것, 사람에게 시각적인 안정을 제공하는 것 등의 실천을 통해 모두가 편안히 호흡하며 쉴 수 있는 공간을 제공하려 합니다.</p>
            <div>
              <a href="#" className="brand_btn">자세히보기</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Service;
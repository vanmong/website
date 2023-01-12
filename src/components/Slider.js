import "./slider.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseLaptop  } from '@fortawesome/free-solid-svg-icons';
import { faEarthAmericas  } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight  } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight  } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft  } from '@fortawesome/free-solid-svg-icons';
import { faPlay  } from '@fortawesome/free-solid-svg-icons';
import { faPause  } from '@fortawesome/free-solid-svg-icons';

function Slider() {
  return (
    <>
    <section className="main_visual">
      <div className="slider_wrapper">
        <div className="box_wrapper">
          <div className="box_viewport">
            <div className="boxslider">
              {/* 첫번째 이미지 */}
              <div className="box_img1">
                <div className="box_caption">
                  <h2>기술과 경혐의 융합, 미래를 위한 변화</h2>
                  <p>언제나 고객과 함께한느 디자인 코코의 새로운비전</p>
                  <div className="box_btn">
                    <a href="#">바로가기</a>
                  </div>
                </div>
              </div>
              {/* 두번째 이미지 */}
              {/* <div className="box_img2">
                <div className="box_caption">
                  <h2>기술과 경혐의 융합, 미래를 위한 변화</h2>
                  <p>언제나 고객과 함께한느 디자인 코코의 새로운비전</p>
                  <div className="box_btn">
                    <a href="#">바로가기</a>
                  </div>
                </div>
              </div> */}
              {/* 세번째 이미지 */}
              {/* <div className="box_img3">
                <div className="box_caption">
                  <h2>기술과 경혐의 융합, 미래를 위한 변화</h2>
                  <p>언제나 고객과 함께한느 디자인 코코의 새로운비전</p>
                  <div className="box_btn">
                    <a href="#">바로가기</a>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="box_controls">
            {/* 다음, 이전 버튼 */}
            <div className="box_controls_direction">
              <a href className="box_prev"><FontAwesomeIcon icon={faChevronLeft} /></a>
              <a href className="box_next"><FontAwesomeIcon icon={faChevronRight} /></a>
            </div>
    
            <div className="box_controls_icons">
            {/* 페이지 아이콘 */}
              <div className="box_pager_wrapper">
                <div className="box_pager">
                  <div className="box_pager_item">
                    <a href="" className="box_pager_link active"></a>
                  </div>
                </div>
                <div className="box_pager">
                  <div className="box_pager_item">
                    <a href="" className="box_pager_link"></a>
                  </div>
                </div>
                <div className="box_pager">
                  <div className="box_pager_item">
                    <a href="" className="box_pager_link"></a>
                  </div>
                </div>
              </div>

              {/* 시작,정지 아이콘 */}
              <div className="box_controls_auto_item">
                <a href="" className="active"><FontAwesomeIcon icon={faPlay} /></a>
              </div>
              <div className="box_controls_auto_item">
                <a href=""><FontAwesomeIcon icon={faPause} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* 비전과가치, 사업소개 */}
    <div className="gnb_box">
      <ul>
        {/* 비전과 가치 */}
        <li>
          <div className="tit"><span><FontAwesomeIcon icon={faEarthAmericas} /></span>비전과 가치</div>
          <div className="txt">언제나 고객과 함께하는 디자인코코의 새로운 비전 입니다.</div>
          <div className="btn"><a href="#"><FontAwesomeIcon icon={faArrowRight} /></a></div>
        </li>
        {/* 사업소개 */}
        <li>
          <div className="tit"><span><FontAwesomeIcon icon={faHouseLaptop} /></span>사업소개</div>
          <div className="txt">언제나 고객과 함께하는 디자인코코의 사업을 소개합니다.</div>
          <div className="btn"><a href="#"><FontAwesomeIcon icon={faArrowRight} /></a></div>
        </li>
      </ul>
    </div>
    </>
  );
}

export default Slider;
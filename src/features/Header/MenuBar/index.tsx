import MenuBarStyled from './styled';
import profile from '@/assets/images/profile.jpg';

const MenuBar = () => {
    return (
        <MenuBarStyled>
            <div className="menuBar">
                <div className="menuHeader">
                    <div className="profileImg">
                        <img src={profile.src} alt="" />
                    </div>
                    <div>"이름"</div>
                    <div>프로필 관리</div>
                </div>
                <div className="menuMain">
                    {/* <div>
                        <div>"회원등급"</div>
                        <div>
                            <div>등급별 혜택</div>
                            <div>"다음등급"가 되기까지 예약 "0"회 남았</div>
                        </div>
                    </div> */}
                    <div>
                        <div>누적 예약</div>
                        <div>이용한 공간</div>
                        <div>함께한 사람들</div>
                    </div>
                    <div>
                        <div>내 쿠폰</div>
                        <div>내 배지</div>
                    </div>
                    <div>
                        <div>이벤트</div>
                        <div>예약리스트</div>
                        <div>이용후기 Q&A관리</div>
                        <div>찜한 공간</div>
                    </div>
                    <div>내 관심정보 설정</div>
                    <div>
                        <ul>
                            <li>스페이스클라우드 홈</li>
                            <li>공지사항</li>
                            <li>도움말</li>
                            <li>1:1문의</li>
                            <li>서비스 정보</li>
                        </ul>
                    </div>
                    <div>로그아웃</div>
                    <div>카피라이트 표기할 곳</div>
                </div>
                <div className="menuFooter">
                    <div>호스트센터로 이동</div>
                </div>
            </div>
        </MenuBarStyled>
    );
};

export default MenuBar;

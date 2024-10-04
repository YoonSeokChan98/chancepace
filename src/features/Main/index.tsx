// import MapComponent from '@/components/MapComponent';
import PaymentComponent from '@/components/PaymentComponent';
import MainStyled from './styled';
// import ToastUiComponent from '@/components/ToastUiComponent';
// import Swipercomponent from '@/components/SwiperComponent';

const Main = () => {
    return (
        <MainStyled>
            <div className="mainWrap">
                <div className='mainTitle'>메인페이지</div>
                <div className='mainExplain'>어서오세요 토스결제 및 toast 알림창 테스트입니다.</div>
                <div>
                    {/* <Swipercomponent /> */}
                    {/* <PaymentComponent /> */}
                    {/* <ToastUiComponent /> */}
                </div>
            </div>
        </MainStyled>
    );
};
export default Main;

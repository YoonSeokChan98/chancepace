// import MapComponent from '@/components/MapComponent';
import PaymentComponent from '@/components/PaymentComponent';
import MainStyled from './styled';
// import ToastUiComponent from '@/components/ToastUiComponent';
// import Swipercomponent from '@/components/SwiperComponent';

const Main = () => {
    return (
        <MainStyled>
            <div className="mainWrap">
                <div>메인페이지</div>
                <div>
                    {/* <Swipercomponent /> */}
                    <PaymentComponent />
                    {/* <ToastUiComponent /> */}
                </div>
            </div>
        </MainStyled>
    );
};
export default Main;

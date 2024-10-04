import { useRouter } from 'next/router';
import SuccessStyled from './styled';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
// import { useSearchParams } from 'react-router-dom';

const SuccessComponent = () => {
    // const [searchParams] = useSearchParams();
    const router = useRouter();
    const searchParams = router.query;
    console.log('결제 성공', searchParams);
    const user = useSelector((state: RootState) => state.user);
    console.log(user, 'kjgkjgkg');

    return (
        <SuccessStyled>
            <div className="successWrap">
                <div>결제 성공</div>
                <div>{`주문 아이디: ${searchParams.orderId}`}</div>
                <div>{`구매자 이름: ${user.userInfo?.username}`}</div>
                <div>{`구매자 이메일: ${user.userInfo?.email}`}</div>
                <div>{`결제 금액: ${Number(searchParams.amount)?.toLocaleString()}원`}</div>
            </div>
        </SuccessStyled>
    );
};
export default SuccessComponent;

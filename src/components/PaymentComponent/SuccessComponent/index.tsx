import { useRouter } from 'next/router';
import { useSearchParams } from 'react-router-dom';

const SuccessComponent = () => {
    // const [searchParams] = useSearchParams();
    const router = useRouter();
    const searchParams = router.query;
    console.log('결제 성공', searchParams);

    return (
        <div>
            <div>결제 성공</div>
            <div>{`주문 아이디: ${searchParams.orderId}`}</div>
            <div>{`상품 이름: ${searchParams.orderName}`}</div>
            <div>{`결제 금액: ${Number(searchParams.amount)?.toLocaleString()}원`}</div>
        </div>
    );
};
export default SuccessComponent;

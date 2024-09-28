import { useRouter } from 'next/router';
import { useSearchParams } from 'react-router-dom';

const FailComponent = () => {
    // const [searchParams] = useSearchParams();
    const router = useRouter();
    const searchParams = router.query;
    console.log('결제 실패', searchParams);

    return (
        <div>
            <div>결제 실패</div>
            <div>{`사유: ${searchParams.message}`}</div>
        </div>
    );
};
export default FailComponent;

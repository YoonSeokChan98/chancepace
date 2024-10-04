import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ToastUiComponentStyled from './styled';

const notify = () => {
    toast.success('Success Notification');
    toast.error('Error Notification');
    toast.info('Info Notification');
    toast.warn('Warning Notification');
};

const ToastUiComponent = () => {
    return (
        <ToastUiComponentStyled>
            <div className="toastUiWrap">
                <div className="toastBox">
                    <div className='btnBox'>
                        <button onClick={notify}>전체 알림창</button>
                        <button onClick={() => toast.success('성공 테스트')}>성공 알림 버튼</button>
                        <button onClick={() => toast.error('실패 테스트')}>실패 알림 버튼</button>
                        <button onClick={() => toast.info('업데이트 테스트')}>업데이트 알림 버튼</button>
                        <button onClick={() => toast.warn('경고 테스트')}>경고 알림 버튼</button>
                    </div>
                    <ToastContainer
                        position="top-right"
                        autoClose={3000}
                        hideProgressBar={false}
                        closeOnClick
                        pauseOnHover
                        draggable
                        pauseOnFocusLoss
                    />
                </div>
            </div>
        </ToastUiComponentStyled>
    );
};
export default ToastUiComponent;

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = () => {
    toast.success('Success Notification');
    toast.error('Error Notification');
    toast.info('Info Notification');
    toast.warn('Warning Notification');
};

const ToastUiComponent = () => {
    return (
        <div>
            <button onClick={notify}>알림창</button>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                closeOnClick
                pauseOnHover
                draggable
                pauseOnFocusLoss
            />
            <button onClick={() => toast.success('성공 테스트')}>성공버튼</button>
            <button onClick={() => toast.error('실패 테스트')}>실패버튼</button>
        </div>
    );
};
export default ToastUiComponent;

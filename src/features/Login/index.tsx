import LoginStyled from './styled';
import { useFormik } from 'formik';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess, loginFailure } from '@/redux/userSlice';
import { AppDispatch } from '@/redux/store';
import { useState } from 'react';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

const Login = () => {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const [loading, setLoading] = useState(false);

    const loginFormik = useFormik({
        initialValues: {
            email: 'tester@example.com',
            password: '!test1234',
        },
        onSubmit: async (values) => {
            const loginUser = {
                email: values.email,
                password: values.password,
            };

            setLoading(true);

            try {
                // 로그인 API 요청
                const response = await axios.post('http://localhost:5000/api/user/login', loginUser);
                console.log('로그인 성공:', response);

                if (response.data.token) {
                    // 쿠키에 토큰을 저장
                    Cookies.set('token', response.data.token, {
                        expires: 1, // 만료 시간 하루
                        secure: true, // HTTPS에서만 전송
                        sameSite: 'Strict', // CSRF 공격 방지
                        path: '/', // 쿠키의 유효 경로
                    });

                    // Redux 상태에 로그인 성공 반영
                    dispatch(
                        loginSuccess({
                            username: response.data.response.username,
                            email: response.data.response.email,
                            token: response.data.token,
                        })
                    );

                    // 로그인 성공 알림
                    toast.success('로그인되었습니다.');

                    // 폼 초기화 및 페이지 이동
                    loginFormik.resetForm();
                    router.push('/');
                }
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    const statusCode = error.response?.status;
                    // console.log('error.response', error.response);
                    // console.log('statusCode', statusCode);

                    if (statusCode) {
                        switch (statusCode) {
                            case 404:
                                console.log('회원이 아닙니다.');
                                toast.error('해당 이메일로 가입된 회원이 없습니다.');
                                break;
                            case 401:
                                console.log('비밀번호가 틀렸습니다.');
                                toast.error('비밀번호가 틀렸습니다.');
                                break;
                            default:
                                console.error('로그인 실패:', error.response?.data.message);
                                toast.error('로그인 중 오류가 발생했습니다. 다시 시도해주세요.');
                                break;
                        }
                        // 로그인 실패 시 Redux 상태에 실패 반영
                        dispatch(loginFailure(error.response?.data.message || '로그인 실패'));
                    }
                } else {
                    // Axios 에러가 아닌 경우 처리
                    console.error('로그인 실패: ', error);
                    toast.error('서버와의 연결에 문제가 있습니다. 나중에 다시 시도해주세요.');
                    dispatch(loginFailure('서버와의 연결에 실패했습니다.'));
                }
            } finally {
                setLoading(false);
            }
        },
    });

    return (
        <LoginStyled>
            <div className="loginWrap">
                <div className="loginTitle">로그인</div>
                <form onSubmit={loginFormik.handleSubmit} className="loginBox">
                    <div>
                        <label htmlFor="">이메일</label>
                        <input
                            placeholder="이메일을 입력하세요"
                            name="email"
                            onChange={loginFormik.handleChange}
                            value={loginFormik.values.email}
                        />
                    </div>
                    <div>
                        <label htmlFor="">비밀번호</label>
                        <input
                            placeholder="비밀번호를 입력하세요"
                            name="password"
                            onChange={loginFormik.handleChange}
                            value={loginFormik.values.password}
                            type="password"
                        />
                    </div>
                    <div>
                        <button type="submit" disabled={loading}>
                            {loading ? '로그인 중...' : '로그인'}
                        </button>
                    </div>
                </form>
            </div>
        </LoginStyled>
    );
};

export default Login;

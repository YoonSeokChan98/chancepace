import LoginStyled from './styled';
import { useFormik } from 'formik';
import axios from 'axios';
import { useRouter } from 'next/router';

const Login = () => {
    const router = useRouter();
    const loginFormik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: async (values) => {
            const loginUser = {
                email: values.email,
                password: values.password,
            };
            try {
                const response = await axios.post('http://localhost:5000/api/user/login', loginUser);
                console.log('로그인 성공:', response);
                if (response.data.token) {
                    document.cookie = `token=${response.data.token}; path=/; max-age=3600; secure; sameSite=Strict`;
                    loginFormik.resetForm();
                    router.push('/');
                } else {
                    alert('로그인 실패:' + response.data.message);
                }
            } catch (error) {
                console.error('로그인 실패: ', error);
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
                        <button>로그인</button>
                    </div>
                </form>
            </div>
        </LoginStyled>
    );
};

export default Login;

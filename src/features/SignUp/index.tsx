import SignUpStyled from './styled';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useState } from 'react';

const SignUp = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [errMsg, setErrMsg] = useState('');

    const signUpFormik = useFormik({
        initialValues: {
            email: '',
            password: '',
            passwordConfirm: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .matches(
                    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                    '이메일을 정확히 입력해 주세요.'
                )
                .required('이메일을 입력하세요'),
            password: Yup.string()
                .min(8, '최소 8자 이상 작성해야 합니다.')
                .max(16, '최대 16자까지 작성 가능합니다.')
                .matches(
                    /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()])[a-zA-Z0-9!@#$%^&*()]{8,16}$/,
                    '비밀번호는 영어, 숫자, 특수문자를 조합해야 합니다.'
                )
                .required('비밀번호를 입력해 주세요.'),
            passwordConfirm: Yup.string()
                .oneOf([Yup.ref('password')], '비밀번호가 일치하지 않습니다')
                .required('비밀번호를 한번 더 입력해 주세요'),
        }),
        onSubmit: async (values) => {
            const newUser = {
                email: values.email,
                password: values.password,
            };
            console.log('SignUp / newUser', newUser);
            setLoading(true);
            setErrMsg('');

            try {
                const response = await axios.post('http://localhost:5000/api/user/signup', newUser);
                console.log('회원가입 성공:', response.data);
                signUpFormik.resetForm();
                router.push('/');
            } catch (error) {
                console.error('회원가입 실패:', error);
                setErrMsg('회원가입 실패');
            } finally {
                setLoading(false);
            }
        },
        validateOnChange: false, // 입력 중에는 유효성 검사를 하지 않습니다.
        validateOnBlur: true, // 입력 필드를 벗어났을 때 유효성 검사를 실행합니다.
    });
    return (
        <SignUpStyled>
            <div className="signUpWrap">
                <div className="signUpTitle">회원가입</div>
                {errMsg && <div className="errMsg">{errMsg}</div>}
                <form onSubmit={signUpFormik.handleSubmit} className="signUpBox">
                    <div className="emailBox">
                        <label htmlFor="emailInput">이메일</label>
                        <input
                            placeholder="이메일을 입력하세요"
                            id="emailInput"
                            name="email"
                            onChange={signUpFormik.handleChange}
                            value={signUpFormik.values.email}
                        />
                        {signUpFormik.touched.email && signUpFormik.errors.email ? (
                            <div className="emailMsg">{signUpFormik.errors.email}</div>
                        ) : null}
                    </div>
                    <div className="pwBox">
                        <label htmlFor="passwordInput">비밀번호</label>
                        <input
                            placeholder="비밀번호를 입력하세요"
                            id="passwordInput"
                            name="password"
                            type="password"
                            onChange={signUpFormik.handleChange}
                            value={signUpFormik.values.password}
                        />
                        {signUpFormik.touched.password && signUpFormik.errors.password ? (
                            <div className="pwMsg">{signUpFormik.errors.password}</div>
                        ) : null}
                    </div>
                    <div className="pwConfirmBox">
                        <label htmlFor="passwordConfirmInput">비밀번호 재확인</label>
                        <input
                            placeholder="비밀번호를 확인하세요"
                            id="passwordConfirmInput"
                            name="passwordConfirm"
                            type="password"
                            onChange={signUpFormik.handleChange}
                            value={signUpFormik.values.passwordConfirm}
                        />
                        {signUpFormik.touched.passwordConfirm && signUpFormik.errors.passwordConfirm ? (
                            <div className="pwConfirmMsg">{signUpFormik.errors.passwordConfirm}</div>
                        ) : null}
                    </div>
                    <div className="signUpBtnBox">
                        <button className="signUpBtn" type="submit">
                            {loading ? '가입 중...' : '회원가입'}
                        </button>
                    </div>
                </form>
            </div>
        </SignUpStyled>
    );
};

export default SignUp;

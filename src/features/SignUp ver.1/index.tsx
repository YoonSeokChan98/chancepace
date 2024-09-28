import { useEffect, useState } from 'react';
import SignUpStyled from './styled';

const SignUp = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
        passwordConfirm: '',
    });
    console.log('form', form);

    // 유효성 검사
    const [emailMsg, setEmailMsg] = useState('');
    const [pwMsg, setPwMsg] = useState('');
    const [pwConfirmMsg, setPwConfirmMsg] = useState('');

    const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
    const passwordRegEx = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

    // 이메일 유효성 검사
    useEffect(() => {
        if (form.email && !emailRegEx.test(form.email)) {
            setEmailMsg('이메일 형식이 올바르지 않습니다!');
        } else {
            setEmailMsg('');
        }
    }, [form.email]);

    // 비밀번호 유효성 검사
    useEffect(() => {
        if (form.password && !passwordRegEx.test(form.password)) {
            setPwMsg('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!');
        } else {
            setPwMsg('');
        }
    }, [form.password]);

    // 비밀번호 재확인 검사
    useEffect(() => {
        if (form.passwordConfirm && form.passwordConfirm !== form.password) {
            setPwConfirmMsg('비밀번호가 일치하지 않습니다.');
        } else {
            setPwConfirmMsg('');
        }
    }, [form.passwordConfirm, form.password]);

    return (
        <SignUpStyled>
            <div className="signupWrap">
                <div>회원가입</div>
                <div className="signupBox">
                    <div className="emailBox">
                        <label htmlFor="email">이메일</label>
                        <input
                            placeholder="이메일을 입력하세요"
                            type="email"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                        />
                        <div className="emailMsg">{emailMsg}</div>
                    </div>
                    <div className="pwBox">
                        <label htmlFor="password">비밀번호</label>
                        <input
                            placeholder="비밀번호를 입력하세요"
                            type="password"
                            value={form.password}
                            onChange={(e) => setForm({ ...form, password: e.target.value })}
                            minLength={8}
                            maxLength={20}
                            required
                        />
                        <div className="pwMsg">{pwMsg}</div>
                    </div>
                    <div className="pwConfirmBox">
                        <label htmlFor="password">비밀번호 재확인</label>
                        <input
                            placeholder="비밀번호를 확인하세요"
                            type="password"
                            value={form.passwordConfirm}
                            onChange={(e) => setForm({ ...form, passwordConfirm: e.target.value })}
                            minLength={8}
                            maxLength={20}
                            required
                        />
                        <div className="pwConfirmMsg">{pwConfirmMsg}</div>
                    </div>
                    <div>
                        <button>회원가입</button>
                    </div>
                </div>
            </div>
        </SignUpStyled>
    );
};

export default SignUp;

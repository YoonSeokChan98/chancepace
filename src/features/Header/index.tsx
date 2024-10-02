import { useEffect, useState } from 'react';
import HeaderStyled from './styled';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { logout } from '@/redux/userSlice';
import Cookies from 'js-cookie';
import axios from 'axios';
import { toast } from 'react-toastify';

import storage from 'redux-persist/lib/storage';
import { userInfo } from 'os';

const Header = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    // redux에서 로그인 한 유저 정보를 가져옴
    const user = useSelector((state: RootState) => state.user);
    const isLoggedIn = !!user.userInfo;
    // console.log('isLoggedIn', isLoggedIn);

    // *스크롤시 위치 값을 저장함
    const [position, setPosition] = useState(0);
    // console.log(position, 'position');

    // *스크롤 상, 하에 따라서 boolean값을 저장함
    const [visible, setVisible] = useState(true);
    // console.log(visible, 'visible');

    // 쿠키에 담긴 토큰의 시간을 구하는 함수
    function getJwtExpiration(token: string): number | null {
        try {
            const payload = JSON.parse(atob(token.split('.')[1])); // JWT payload 부분 디코딩
            return payload.exp * 1000; // exp는 초 단위이므로 밀리초로 변환해서 리턴
        } catch (error) {
            console.error('Invalid JWT token', error);
            return null;
        }
    }

    // 현재 시간과 만료 시간을 비교하는 함수 / 만료 된다면 true를 뱉음
    function isTokenExpired(expirationTime: number): boolean {
        const currentTime = Date.now(); // 현재 시간을 밀리초로 구함
        return currentTime > expirationTime; // 현재 시간이 만료 시간보다 크면 true 리턴
    }

    // 토큰 재발급 함수
    const refreshToken = async (userToken: string) => {
        try {
            const response = await axios.post(
                'http://localhost:5000/api/user/refresh-token',
                { token: userToken, userInfo: user },
                { headers: { 'Content-Type': 'application/json' } }
            );
            const newToken = response.data.newToken;
            if (newToken) {
                Cookies.set('token', newToken, {
                    expires: 1,
                    secure: true,
                    sameSite: 'Strict',
                    path: '/',
                });
            }
            console.log('토큰이 재발급되었습니다.');
        } catch (error) {
            console.error('토큰 재발급 실패:', error);
            // 로그아웃을 넣어야 하는가?
        }
    };

    // 토큰 상태 확인
    useEffect(() => {
        const token = Cookies.get('token');
        console.log('현재 토큰 상태: ', token);
    }, []);

    // 렌더링 될 때 토큰확인하고 유저정보 다시 던져주기
    useEffect(() => {
        const tokenCheck = async () => {
            const token = Cookies.get('token');
            console.log('현재 토큰 상태: ', token);
            if (token) {
                try {
                    const response = await axios.post(
                        'http://localhost:5000/api/user/token-check',
                        { token, userInfo: user },
                        { headers: { Authorization: `Bearer${token}` } }
                    );
                    console.log('유저정보: ', response);
                } catch (error) {
                    console.error('토큰 검증 중 에러 발생: ', error);
                }
            }
        };
        tokenCheck();
    }, []);

    // 리덕스 상태 확인
    useEffect(() => {
        console.log('현재 리덕스 상태:', user);
        // console.log('storage', storage.getItem);
    }, [user]);

    useEffect(() => {
        const checkTokenValidity = async () => {
            const userToken = Cookies.get('token');
            if (userToken) {
                const expirationTime = getJwtExpiration(userToken);
                if (expirationTime && isTokenExpired(expirationTime)) {
                    console.log('토큰이 만료되었습니다.');
                    await refreshToken(userToken);
                } else {
                    console.log('토큰이 아직 유효합니다.');
                }
            }
        };
        checkTokenValidity();
    }, [isLoggedIn]);

    // *스크롤 상, 하에 따라서 헤더 on/off
    useEffect(() => {
        const handleScroll = () => {
            const moving = window.scrollY;
            setVisible(position > moving);
            setPosition(moving);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [position]);

    // 로그아웃
    const handleLogout = () => {
        // redux에서 로그아웃 액션 호출
        dispatch(logout());
        // 쿠키에서 토큰 삭제
        Cookies.remove('token');
        toast.info('로그아웃');
        router.push('/');
    };

    return (
        <HeaderStyled $visible={visible}>
            <div className="headerWrap">
                <div className="logo" onClick={() => router.push('/')}>
                    ChancePayment
                </div>
                <div className="navBtn">
                    {isLoggedIn ? (
                        <div onClick={handleLogout}>로그아웃</div>
                    ) : (
                        <>
                            <div onClick={() => router.push('/signup')}>회원가입</div>
                            <div onClick={() => router.push('/login')}>로그인</div>
                        </>
                    )}
                </div>
            </div>
        </HeaderStyled>
    );
};

export default Header;

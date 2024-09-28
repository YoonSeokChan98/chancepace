import { useEffect, useState } from 'react';
import HeaderStyled from './styled';
import { IoMenu } from 'react-icons/io5';
import MenuBar from './MenuBar';
import { useRouter } from 'next/router';
import axios from 'axios';
// import config { dev } from '@/config/config';
import nookies from "nookies";

const Header = () => {
    const router = useRouter();

    // *스크롤시 위치 값을 저장함
    const [position, setPosition] = useState(0);
    // console.log(position, 'position');
    // *스크롤 상, 하에 따라서 boolean값을 저장함
    const [visible, setVisible] = useState(true);
    // console.log(visible, 'visible');

    // *클릭시 boolean 값을 저장함
    const [onClick, setOnClick] = useState(false);
    // console.log(onClick);

    const toggleMenu = () => {
        setOnClick(!onClick);
    };

    const menuUiBtn = onClick ? <MenuBar /> : <></>;

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

    useEffect(()=>{

    },[])

    const handleLogout = () => {
        console.log('클릭됨');
        sessionStorage.removeItem('user');
        router.push('/');
    };

    return (
        <HeaderStyled visible={visible}>
            <div className="headerWrap">
                {/* <div className="menuBtn" onClick={() => toggleMenu()}>
                    <IoMenu />
                    {menuUiBtn}
                </div> */}
                <div className="logo" onClick={() => router.push('/')}>
                    ChancePace
                </div>
                <div className="navBtn">
                    {/* {isLoggedIn ? (
                        <div onClick={handleLogout}>로그아웃</div>
                    ) : (
                        <>
                            <div onClick={() => router.push('/signup')}>회원가입</div>
                            <div onClick={() => router.push('/login')}>로그인</div>
                        </>
                    )} */}
                </div>
                <div onClick={() => router.push('/signup')}>회원가입</div>
                <div onClick={() => router.push('/login')}>로그인</div>
                <div onClick={handleLogout}>로그아웃</div>
            </div>
        </HeaderStyled>
    );
};

export default Header;

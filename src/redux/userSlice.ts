import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// 타입지정
interface UserState {
    isLoggedIn: boolean; // 로그인 여부
    userInfo: { username: string; email: string; token: any } | null; // 사용자 정보
    error: string | null; // 에러 메세지
}

// 초기값
const initialState: UserState = {
    isLoggedIn: false, // 로그인하면 true / 아니라면 false
    userInfo: null, // 유저의 정보를 넣는 곳 / 이메일을 저장시킴
    error: null, // 오류 메시지를 저장 하는 곳
  };

const userSlice = createSlice({
    name: 'user', // 슬라이스의 이름을 'user'라고 설정함
    initialState, // 설정한 초기값을 가져와서 사용함
    reducers: {
        // 로그인 성공 시 호출될 액션
        loginSuccess: (state, action: PayloadAction<{ username: string; email: string; token: any }>) => {
            state.isLoggedIn = true;
            state.userInfo = action.payload;
            state.error = null;
        },

        // 로그인 실패 시 호출될 액션
        loginFailure: (state, action: PayloadAction<string>) => {
            state.isLoggedIn = false;
            state.userInfo = null;
            state.error = action.payload;
        },
        
        // 로그아웃 액션
        logout: (state) => {
            state.isLoggedIn = false;
            state.userInfo = null;
            state.error = null;
        },
    },
});

export const { loginSuccess, loginFailure, logout } = userSlice.actions;
export default userSlice.reducer;

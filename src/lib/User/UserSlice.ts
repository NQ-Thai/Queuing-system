import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
    key: string;
    id: string;
    Avata: string;
    TaiKhoan: string;
    TenDangNhap: string;
    MatKhau: string;
    TenNguoiDung: string;
    SDT: string;
    VaiTro: string;
    Email: string;
}

export interface UserState {
    users: User[];
    loading: boolean;
    error: string | null;
}

const initialState: UserState = {
    users: [],
    loading: false,
    error: null,
};

const userSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
        fetchDataStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchDataSuccess: (state, action: PayloadAction<User[]>) => {
            state.users = action.payload;
            state.loading = false;
            state.error = null;
        },
        fetchDataFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = userSlice.actions;

export default userSlice.reducer;

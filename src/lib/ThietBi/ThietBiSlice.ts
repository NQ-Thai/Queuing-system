import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ThietBi {
    key: string;
    id: string;
    TenDangNhap: string;
    MatKhau: string;
    MaThietBi: string;
    TenThietBi: string;
    DiaChiIP: string;
    TrangThaiHoatDong: string;
    TrangThaiKetNoi: string;
    DichVu: string;
    isExpanded: boolean;
}

export interface ThietbiState {
    thietbis: ThietBi[];

    selectedThietBi: ThietBi | null;
    loading: boolean;
    error: string | null;
}

const initialState: ThietbiState = {
    thietbis: [],
    selectedThietBi: null,
    loading: false,
    error: null,
};

const thietbiSlice = createSlice({
    name: 'Thietbi',
    initialState,
    reducers: {
        fetchDataStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchDataSuccess: (state, action: PayloadAction<ThietBi[]>) => {
            state.thietbis = action.payload;
            state.loading = false;
            state.error = null;
        },
        fetchDataFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
        setSelectedThietBiDetail: (state, action: PayloadAction<ThietBi | null>) => {
            state.selectedThietBi = action.payload;
        },
        toggleRowExpansion: (state, action: PayloadAction<string>) => {
            const selectedThietBi = state.thietbis.find((item) => item.key === action.payload);
            if (selectedThietBi) {
                selectedThietBi.isExpanded = !selectedThietBi.isExpanded;
            }
        },
    },
});

export const setSelectedThietBiDetail = createAction<ThietBi | null>(
    'thietbi/setSelectedThietBiDetail',
);

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = thietbiSlice.actions;

export default thietbiSlice.reducer;

// ticketSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ThietBi {
    key: string;
    thietBi: string;
    tenThietBi: string;
    diaChiIP: string;
    trangThaiHoatdong: string;
    trangThaiKetNoi: string;
    dichVuSuDung: string;
}

interface ThietBiState {
    thietbis: ThietBi[];
}

const initialState: ThietBiState = {
    thietbis: [],
};

const thietbiSlice = createSlice({
    name: 'ticket',
    initialState,
    reducers: {
        setThietBis: (state, action: PayloadAction<ThietBi[]>) => {
            state.thietbis = action.payload;
        },
    },
});

export const { setThietBis } = thietbiSlice.actions;

export default thietbiSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NCapSo } from '../Type/NLevel';

export interface nlevelState {
    nlevels: NCapSo[];
    loading: boolean;
    error: string | null;
}

const initialState: nlevelState = {
    nlevels: [],
    loading: false,
    error: null,
};

const nlevelSlice = createSlice({
    name: 'Nlevel',
    initialState,
    reducers: {
        fetchDataStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchDataSuccess: (state, action: PayloadAction<NCapSo[]>) => {
            state.nlevels = action.payload;
            state.loading = false;
            state.error = null;
        },
        fetchDataFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});
export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = nlevelSlice.actions;

export default nlevelSlice.reducer;

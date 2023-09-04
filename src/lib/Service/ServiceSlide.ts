import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Service } from '../Type/Service';

export interface ServiceState {
    services: Service[];
    loading: boolean;
    error: string | null;
}

const initialState: ServiceState = {
    services: [],
    loading: false,
    error: null,
};

const serviceSlice = createSlice({
    name: 'Service',
    initialState,
    reducers: {
        fetchDataStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchDataSuccess: (state, action: PayloadAction<Service[]>) => {
            state.services = action.payload;
            state.loading = false;
            state.error = null;
        },
        fetchDataFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});
export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = serviceSlice.actions;

export default serviceSlice.reducer;

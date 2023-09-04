import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Device } from '../Type/Device';

export interface DeviceState {
    devices: Device[];
    loading: boolean;
    error: string | null;
}

const initialState: DeviceState = {
    devices: [],
    loading: false,
    error: null,
};

const deviceSlice = createSlice({
    name: 'Device',
    initialState,
    reducers: {
        fetchDataStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchDataSuccess: (state, action: PayloadAction<Device[]>) => {
            state.devices = action.payload;
            state.loading = false;
            state.error = null;
        },
        fetchDataFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});
export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = deviceSlice.actions;

export default deviceSlice.reducer;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { collection, getDocs } from 'firebase/firestore';
import { Device } from '../Type/Device';
import { firestore } from '../firebase';

export const fetchData = createAsyncThunk<Device[]>('thietbi/fetchData', async () => {
    const dataRef = collection(firestore, 'thietbi');
    const snapshot = await getDocs(dataRef);
    const data: Device[] = snapshot.docs.map((doc, index) => {
        const data = doc.data();
        return {
            id: doc.id,
            STT: `${index + 1}`,
            ...data,
        };
    });
    return data;
});
const deviceSlice = createSlice({
    name: 'device',
    initialState: { device: [] as Device[] },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.device = action.payload;
        });
    },
});

export default deviceSlice.reducer;

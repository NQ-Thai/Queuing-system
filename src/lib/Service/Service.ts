import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { collection, getDocs } from 'firebase/firestore';
import { Service } from '../Type/Service';
import { firestore } from '../firebase';

export const fetchData = createAsyncThunk<Service[]>('dichvu/fetchData', async () => {
    const dataRef = collection(firestore, 'dichvu');
    const snapshot = await getDocs(dataRef);
    const data: Service[] = snapshot.docs.map((doc, index) => {
        const data = doc.data();
        return {
            id: doc.id,
            STT: `${index + 1}`,
            ...data,
        };
    });
    return data;
});
const serviceSlice = createSlice({
    name: 'service',
    initialState: { service: [] as Service[] },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.service = action.payload;
        });
    },
});

export default serviceSlice.reducer;

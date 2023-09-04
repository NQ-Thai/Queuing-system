import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { collection, getDocs } from 'firebase/firestore';
import { ServiceTT } from '../Type/ServiceTT';
import { firestore } from '../firebase';

export const fetchData = createAsyncThunk<ServiceTT[]>('dichvutt/fetchData', async () => {
    const dataRef = collection(firestore, 'dichvutt');
    const snapshot = await getDocs(dataRef);
    const data: ServiceTT[] = snapshot.docs.map((doc, index) => {
        const data = doc.data();
        return {
            id: doc.id,
            STT: `${index + 1}`,
            ...data,
        };
    });
    return data;
});
const serviceTTSlice = createSlice({
    name: 'servicett',
    initialState: { servicett: [] as ServiceTT[] },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.servicett = action.payload;
        });
    },
});

export default serviceTTSlice.reducer;

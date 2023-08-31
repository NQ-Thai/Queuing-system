import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { app } from '../Firebase';
import { CapSo } from '../Type/CapSo';

export const fetchData = createAsyncThunk<CapSo[]>('capso/fetchData', async () => {
    const firestore = getFirestore(app);
    const dataRef = collection(firestore, 'capso');
    const snapshot = await getDocs(dataRef);
    const data: CapSo[] = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as CapSo));
    return data;
});
const CapSoSlice = createSlice({
    name: 'capso',
    initialState: { capso: [] as CapSo[] },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.capso = action.payload;
        });
    },
});

export default CapSoSlice.reducer;

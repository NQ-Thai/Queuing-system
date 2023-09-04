import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { collection, getDocs } from 'firebase/firestore';
import { NCapSo } from '../Type/NLevel';
import { firestore } from '../firebase';

export const fetchData = createAsyncThunk<NCapSo[]>('ncapso/fetchData', async () => {
    const dataRef = collection(firestore, 'ncapso');
    const snapshot = await getDocs(dataRef);
    const data: NCapSo[] = snapshot.docs.map((doc, index) => {
        const data = doc.data();
        return {
            id: doc.id,
            STT: `${index + 1}`,
            ...data,
        };
    });
    return data;
});
const nlevelSlice = createSlice({
    name: 'nlevel',
    initialState: { nlevel: [] as NCapSo[] },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.nlevel = action.payload;
        });
    },
});

export default nlevelSlice.reducer;

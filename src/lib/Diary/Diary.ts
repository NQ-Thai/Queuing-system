import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { collection, getDocs } from 'firebase/firestore';
import { Diary } from '../Type/Diary';
import { firestore } from '../firebase';

export const fetchData = createAsyncThunk<Diary[]>('nhatky/fetchData', async () => {
    const dataRef = collection(firestore, 'nhatky');
    const snapshot = await getDocs(dataRef);
    const data: Diary[] = snapshot.docs.map((doc, index) => {
        const data = doc.data();
        return {
            id: doc.id,
            STT: `${index + 1}`,
            ...data,
        };
    });
    return data;
});
const diarySlice = createSlice({
    name: 'nhatky',
    initialState: { diarys: [] as Diary[] },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.diarys = action.payload;
        });
    },
});

export default diarySlice.reducer;

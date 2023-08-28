import { collection, getFirestore } from 'firebase/firestore';
import { app } from './Firebase';

export const firestore = getFirestore(app);

export const thietbiCollection = collection(firestore, 'thietbi');

export const dichvuCollection = collection(firestore, 'dichvu');

export const capSoCollection = collection(firestore, 'capso');

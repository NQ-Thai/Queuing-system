import { collection, getFirestore } from 'firebase/firestore';
import { app } from './firebase';

export const firestore = getFirestore(app);
export const roleCollection = collection(firestore, 'role');

export const userCollection = collection(firestore, 'user');

export const deviceCollection = collection(firestore, 'thietbi');

export const serviceCollection = collection(firestore, 'dichvu');

export const capSoCollection = collection(firestore, 'capso');

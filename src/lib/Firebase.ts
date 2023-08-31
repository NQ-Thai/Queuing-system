import { initializeApp } from 'firebase/app';
import 'firebase/auth';
import { Auth, getAuth } from 'firebase/auth';
import 'firebase/firestore';
import { Firestore, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyCy1fCWs7cOuqhzU-w-peLVxp_tb15J3y8',
    authDomain: 'queuing-system-f6424.firebaseapp.com',
    projectId: 'queuing-system-f6424',
    storageBucket: 'queuing-system-f6424.appspot.com',
    messagingSenderId: '258568679140',
    appId: '1:258568679140:web:57c372920bd76c050f46f1',
    measurementId: 'G-X1K2F8G7TL',
};

export const app = initializeApp(firebaseConfig);
export const firestore: Firestore = getFirestore(app);

export const auth: Auth = getAuth(app);

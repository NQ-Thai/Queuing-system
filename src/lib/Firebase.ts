import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: 'AIzaSyCy1fCWs7cOuqhzU-w-peLVxp_tb15J3y8',
    authDomain: 'queuing-system-f6424.firebaseapp.com',
    projectId: 'queuing-system-f6424',
    storageBucket: 'queuing-system-f6424.appspot.com',
    messagingSenderId: '258568679140',
    appId: '1:258568679140:web:57c372920bd76c050f46f1',
    measurementId: 'G-X1K2F8G7TL',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

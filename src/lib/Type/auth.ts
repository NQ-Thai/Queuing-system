import { Auth } from 'firebase/auth';

export interface ExtendedAuth extends Auth {
    sendPasswordResetEmail(email: string): Promise<void>;
}

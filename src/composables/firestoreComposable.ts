import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const PROJECT_ID = import.meta.env.VITE_FIREBASE_PROJECT_ID || "keue-dev";
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    projectId: PROJECT_ID,
    authDomain: `${PROJECT_ID}.firebaseapp.com`,
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const useFirestore = () => {
    return { app, db };
};

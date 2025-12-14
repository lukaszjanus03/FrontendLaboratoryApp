import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // 1. Import Firestore

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID
};

// 2. Inicjalizacja aplikacji (z zachowaniem Twojego zabezpieczenia przed błędami Next.js)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// 3. Inicjalizacja usług
const auth = getAuth(app);
const db = getFirestore(app); // To jest ta nowa baza danych

// 4. Eksport wszystkiego, żeby inne pliki mogły z tego korzystać
export { app, auth, db };
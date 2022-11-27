import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDgmIIhw_nnfYiDx2wOJ-NOTaC4_DQMS5o",
  authDomain: "primerproyectoreact.firebaseapp.com",
  projectId: "primerproyectoreact",
  storageBucket: "primerproyectoreact.appspot.com",
  messagingSenderId: "558829409040",
  appId: "1:558829409040:web:f6c394867d97aa9fb0cb95"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
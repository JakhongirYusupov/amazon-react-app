
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyBLlyGnri2G-Nh7ufMxtBevTmnUiNpG7r0",
  authDomain: "fir-f07dd.firebaseapp.com",
  projectId: "fir-f07dd",
  storageBucket: "fir-f07dd.appspot.com",
  messagingSenderId: "493486424570",
  appId: "1:493486424570:web:a1d4af25986d8517c36443",
  measurementId: "G-NRHXSLFSGJ"
};

const Backend = initializeApp(firebaseConfig);
const auth = getAuth();

export {
  Backend,
  auth
}

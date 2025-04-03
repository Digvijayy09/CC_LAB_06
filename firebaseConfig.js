

const firebaseConfig = {
  apiKey: "AIzaSyCDrISvpgydi0UVgTVEZ68RdNCahr7XR_k",
  authDomain: "cc-lab-06-2162e.firebaseapp.com",
  projectId: "cc-lab-06-2162e",
  storageBucket: "cc-lab-06-2162e.firebasestorage.app",
  messagingSenderId: "196790075291",
  appId: "1:196790075291:web:cbb70755117f29be9a2b3e",
  measurementId: "G-1RSN2M1PL7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

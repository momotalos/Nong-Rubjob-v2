// ============ FIREBASE CONFIGURATION ============
// Using Firebase compat SDK (loaded via CDN in index.html) — no build step needed.

const firebaseConfig = {
  apiKey: "AIzaSyCNp6PCsyxCWI2tYGUYvgyKMkLXNJF9QjE",
  authDomain: "gen-lang-client-0866800129.firebaseapp.com",
  projectId: "gen-lang-client-0866800129",
  storageBucket: "gen-lang-client-0866800129.firebasestorage.app",
  messagingSenderId: "879595901925",
  appId: "1:879595901925:web:53d8f78ea0ede2b3b2950c"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

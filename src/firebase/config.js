import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDkYUdKXhUpO7b5GiTJdAShR9WeV8N2nDo",
    authDomain: "ashwani-blog-4ea7a.firebaseapp.com",
    projectId: "ashwani-blog-4ea7a",
    storageBucket: "ashwani-blog-4ea7a.appspot.com",
    messagingSenderId: "345015606984",
    appId: "1:345015606984:web:cd68bf257179edcb39cffd"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const projectStorage  = getStorage(firebaseApp);
  const projectFirestore = getFirestore(firebaseApp);
  

  export{projectStorage ,projectFirestore};
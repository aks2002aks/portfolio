import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";
import { collection, orderBy, query, onSnapshot } from "firebase/firestore";

function useFirestore(collections) {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const q = query(
      collection(projectFirestore, collections),
      orderBy("createdAt", "desc")
    );
    const unsub = onSnapshot(q, (querySnapshot) => {
      let documents = [];
      querySnapshot.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
      });
      setDocs(documents);
    });
    return () => unsub();
  }, [collection]);
  return { docs };
}

export default useFirestore;

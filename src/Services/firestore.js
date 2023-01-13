import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  query,
  where,
  addDoc,
  orderBy,
  limit,
} from "firebase/firestore";

// Your web app's Firebase configuration 
const firebaseConfig = { 
  apiKey: "AIzaSyBA2HZ1U1U9t9FN66n1KOgvK-rCPcLKQ4E", 
  authDomain: "farmaq-d0777.firebaseapp.com", 
  projectId: "farmaq-d0777", 
  storageBucket: "farmaq-d0777.appspot.com", 
  messagingSenderId: "614692507498", 
  appId: "1:614692507498:web:99ec06c934d69c6e4edf13" 
};

const app = initializeApp(firebaseConfig);
const DB = getFirestore(app);

export default async function getItems() {
  const colectionProductsRef = collection(DB, "products");
  const documentSnapshot = await getDocs(colectionProductsRef);

  const documentsData = documentSnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  return documentsData;
}

export async function getItemsOrdered() {
  const colectionProductsRef = collection(DB, "products");
  const q = query(colectionProductsRef, orderBy("index"), limit(10));

  const documentSnapshot = await getDocs(q);

  const documentsData = documentSnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  return documentsData;
}

export async function getSingleItem(idParams) {
  const docRef = doc(DB, "products", idParams);

  const docSnapshot = await getDoc(docRef);

  const itemData = docSnapshot.data();
  itemData.id = docSnapshot.id;

  return itemData;
}

export async function getItemsByCategory(categoryParams) {
  const collectionRef = collection(DB, "products");

  const queryCat = query(
    collectionRef,
    where("category", "==", categoryParams)
  );

  const documentSnapshot = await getDocs(queryCat);

  const documentsData = documentSnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  return documentsData;
}

export async function createOrder(order) {
  const collectionRef = collection(DB, "orders");
  
  const docOrder = await addDoc(collectionRef, order);
  return docOrder.id;
}



import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const refCollection = categoryId
      ? query(collection(db, "items"), where("categoria", "==", categoryId))
      : collection(db, "items");
    getDocs(refCollection).then((snapshot) => {
      if (snapshot.size === 0) console.log("no results");
      else {
        setProducts(
          snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
        setLoading(false);
      }
    });
  }, [categoryId]);

  return loading ? (
    <h6>Estamos cargando los mejores productos para ti...</h6>
  ) : (
    <ItemList products={products} />
  );
};

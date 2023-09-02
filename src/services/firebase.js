import { collection, addDoc, getDocs } from "firebase/firestore";
import {db} from '../firebase';

export const getProducts = async () => {
    const productos = await getDocs(collection(db, "Productos"));

    return productos.docs.map(( doc ) => ({
        ...doc.data(),
    }));
};

export const getProductsByCategory = async (category) => {
    const productos = await getProducts();
    
    return productos.filter(prod => prod.categoria === category);
}

export const getProductById = async (id) => {
    const productos = await getProducts();
    
    return productos.find(prod => prod.id === id);
}

export const crearOrden = async ( comprador, items ) => {
    const itemsCollectionRef = collection(db , "Compras")
    return addDoc(itemsCollectionRef, {
        comprador,
        items: items,
    });
}

import React from 'react';
import GridProductos from './GridProductos';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ListaCategorias from './ListaCategorias.js';
import Loading from './Loading';
import { collection, getDocs, getFirestore, limit, query, where } from 'firebase/firestore';


export default function ItemListContainer() {

    const [listaProductos, setListaProductos] = useState();
    const catId = useParams();

    function construirQuery(db) {
        const queryArgs = [collection(db, "items")];
        if (catId.id) queryArgs.push(where("category", "==", catId.id));

        return query(...queryArgs);
    }

    useEffect(() => {
        const q = construirQuery(getFirestore());
        getDocs(q).then((snapshot) => {
            if (snapshot.size === 0) {
                console.log("Sin resultados");
            } else {
                setListaProductos(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
            }
        });
    }, [catId]);

    return (
        <>
          <ListaCategorias catId={catId.id}/>
            {listaProductos ? <GridProductos productos={listaProductos} /> : <Loading />}
        </>
    );
}

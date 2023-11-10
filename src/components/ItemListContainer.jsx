import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import {ItemList} from "./ItemList"
import datos from "../../products.json"


export const ItemListContainer = () => {
    
    const [products, setProducts] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const promise= new Promise((res, rej) => {
            setTimeout(() =>{res(datos)}, 2000)
        })
        promise.then((response) => {
            setProducts(response)
        }).finally(() => setLoading(false))
	}, [])

    return (
		
			<>
				{loading ? (
					<h6>Estamos cargando los mejores productos para ti...</h6>
				) : (
                   <ItemList products={products} />
				)}
			</>
		
	)
}
import { Skip } from '@/app/types/types'

export const ProductCard = (product: Skip) => {
    return (
        <>
            <div> Id : {product.id}</div>
            <div>Allowed On Road= {product.allowed_on_road ? "Yes" : "No"}</div>
            <div> Allows heavy waste = {product.allows_heavy_waste ? "Yes" : "No"} </div>
        </>
    )
}


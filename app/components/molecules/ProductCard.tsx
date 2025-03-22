import { Skip } from '@/app/types/types'
import React from 'react'


const ProductCard = (product: Skip) => {
    return (
        <div>ProductCard= {product.allowed_on_road ? "true" : "false"}</div>
    )
}

export default ProductCard
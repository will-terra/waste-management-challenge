import Image from 'next/image'
import skipImage from '../../public/skip.png'
import { Skip } from '@/types/types'

export const ProductCard = (product: Skip) => {
    return (
        <div className=" flex flex-col bg-white p-4 rounded-md shadow-md">
            <Image
                priority
                src={skipImage}
                alt="skip"
                width={300}
                height={200}
                style={{
                    width: '100%',
                    height: 'auto'
                }}
            />
            <p className="text-2xl font-bold"> {product.size} Yard Skip</p>
            <div>Allowed On Road= {product.allowed_on_road ? "Yes" : "No"}</div>
            <div> Allows heavy waste = {product.allows_heavy_waste ? "Yes" : "No"} </div>
        </div>
    )
}


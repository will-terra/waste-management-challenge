import Image from 'next/image'
import skipImage from '../../public/skip.png'
import { Skip } from '@/types/types'

export const ProductCard = (product: Skip) => {
    return (
        <div className="rounded-lg border-2 p-4 md:p-6 border-lightGray hover:border-lightBlue/50 bg-secondaryDarkGray text-white">
            <Image
                priority
                src={skipImage}
                alt="skip"
                width={250}
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


export interface Skip {

    id: number,
    size: number,
    hire_period: number,
    transport_cost: number | null,
    per_tonne_cost: number | null,
    price_before_vat: number | null,
    vat: number,
    postcode: string,
    allowed_on_road: boolean,
    allows_heavy_waste: boolean
}

export enum SkipProperty {
    ALLOWED_ON_ROAD = "allowed_on_road",
    ALLOWS_HEAVY_WASTE = "allows_heavy_waste"
}
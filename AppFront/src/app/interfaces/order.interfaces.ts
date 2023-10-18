export interface Order {
    id: string;
    userId: string;
    productsId: Array<{
        productId:string;
        size:string;
    }>
    total: number;
}


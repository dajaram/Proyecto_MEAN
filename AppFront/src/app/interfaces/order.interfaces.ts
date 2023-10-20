export interface Order {
    userId: string;
    productsId: Array<{
        productId:string;
        size:string;
    }>
    total: number;
}

export interface SelectedSize{
    size: string;
    productId: string;
}

export interface ProductAdded{
    _id: string;
    product: string;
    color: string;
    price: number;
    size: string;
    categories: number;
    img: Array<string>;

}
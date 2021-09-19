import { CartItem } from "../../domain/useCases/shoppingCart/cart-item";

export class Product implements CartItem{
    constructor(public name: string, public price: number) {}
    
}
import { CartItem } from '../../domain/useCases/shoppingCart/cart-item'

export class ShoppingCart {
    private readonly _items: CartItem[] = []

    addItem(item: CartItem): void{
        this._items.push(item)
    }
    removeItem(index: number):void {
        this._items.splice(index, 1)
    }

    total():number {
        return this._items.reduce((accumulator, item) => accumulator += item.price , 0)
    }

    isEmpty(): boolean {
        return this._items.length ? false : true
    }

    
    
    clear():void {
        console.log('Your shopping cart was clean')
        this._items.length = 0
    }
    get items():Readonly<CartItem[]> {
        return this._items
    }

}



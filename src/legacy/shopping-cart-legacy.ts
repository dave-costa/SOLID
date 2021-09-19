type CartItem = {
    name: string,
    price: number 
}

export class ShoppingCartLegacy {
    private readonly _items: CartItem[] = []
    private orderStatus : 'Open' | 'Close' = 'Open'

    addItem(item: CartItem): void{
        this._items.push(item)
    }
    removeItem(index: number):void {
        this._items.splice(index, 1)
    }
    total():number {
        return this._items.reduce((accumulator, item) => accumulator += item.price , 0)
    }

    checkout(): void {
        if (this.isEmpty()) {
            console.log('Your shopping cart is empty')
            return 
        }
        this.orderStatus = 'Close'
        this.sendMessage('Your request has been received')
        this.saveOrder()
        this.clear()
    }
    

    isEmpty(): boolean {
        return this._items.length ? false : true
    }
    sendMessage(msg: string):void {
        console.log(msg)
    }
    saveOrder():void {
        console.log('Your request was saved with success')
    }
    clear():void {
        console.log('Your shopping cart was clean')
        this._items.length = 0
    }
    get items():Readonly<CartItem[]> {
        return this._items
    }

}

const shoppingCart = new ShoppingCartLegacy()

shoppingCart.addItem({
    name: 'PS4', 
    price: 4000
})
shoppingCart.addItem({
    name: 'Monitor', 
    price: 3900
})
shoppingCart.addItem({
    name: 'Keyboard', 
    price: 700
})
shoppingCart.checkout()

console.log(shoppingCart.items)
console.log(shoppingCart.total())

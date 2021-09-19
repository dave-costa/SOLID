import { ShoppingCart } from './shopping-cart';
import { OrderStatus } from '../../domain/useCases/shoppingCart/order-status'
import { Message } from './message';
import { Persistency } from './persistency';

export class Order 
{
    private _orderStatus: OrderStatus = 'Open' //

    constructor(
        private readonly cart: ShoppingCart, 
        private readonly message: Message,
        private readonly persistency: Persistency
    ) {}
    get orderStatus():OrderStatus {
        return this._orderStatus
    }    
    
    checkout(): void {
        if (this.cart.isEmpty()) {
            console.log('Your shopping cart is empty')
            return 
        }
        this._orderStatus = 'Close'
        this.message.sendMessage('Your request has been received')
        this.persistency.saveOrder()
        this.cart.clear()
    }

}
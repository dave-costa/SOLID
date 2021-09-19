import { FiftyDiscount } from './data/useCases/discount'
import { Message } from './data/useCases/message'
import { Order } from './data/useCases/order'
import { Persistency } from './data/useCases/persistency'
import { Product } from './data/useCases/product'
import { ShoppingCart } from './data/useCases/shopping-cart'

const fiftyDiscount = new FiftyDiscount()
const shoppingCart = new ShoppingCart(fiftyDiscount)
const message = new Message()
const persistency = new Persistency()
const order = new Order(shoppingCart, message, persistency)

shoppingCart.addItem(new Product('PS4', 4000))
shoppingCart.addItem(new Product('Monitor',3900))
shoppingCart.addItem(new Product('Keyboard', 700))
//order.checkout()

console.log(shoppingCart.items)
console.log(shoppingCart.total())
console.log(shoppingCart.totalWithDiscount())
console.log(order.orderStatus)
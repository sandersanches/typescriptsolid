import Messaging from './services/messaging';
import Order from './classes/order';
import Persistency from './services/persistency';
import Product from './classes/product';
import ShoppingCart from './classes/shopping-cart';
import { TenPercentDiscount } from './classes/discount';

// const fiftyPercentDiscount = new FiftyPercentDiscount();
const tenPercentDiscount = new TenPercentDiscount();
// const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(tenPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();

const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItens(new Product('melão', 13.25));
shoppingCart.addItens(new Product('maça', 9.5587));
shoppingCart.addItens(new Product('pera', 6.0));
shoppingCart.addItens(new Product('uva', 12.0));
shoppingCart.removeItem(1);

console.log(shoppingCart.itens);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());

order.checkout();
console.log(shoppingCart.itens);
console.log(order.orderStatus);

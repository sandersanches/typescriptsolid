import Messaging from './services/messaging';
import Order from './entities/order';
import Persistency from './services/persistency';
import Product from './entities/product';
import ShoppingCart from './entities/shopping-cart';

const shoppingCart = new ShoppingCart();
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

order.checkout();
console.log(shoppingCart.itens);
console.log(order.orderStatus);

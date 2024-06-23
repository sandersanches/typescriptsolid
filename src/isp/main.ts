// import Messaging from './services/messaging';
import Order from './classes/order';
import Persistency from './services/persistency';
import Product from './classes/product';
import ShoppingCart from './classes/shopping-cart';
import { TenPercentDiscount } from './classes/discount';
import { EnterpriseCustumer } from './classes/custumer';
import MessagingProtocol from './services/interfaces/messaging-protocol';

// const fiftyPercentDiscount = new FiftyPercentDiscount();
const tenPercentDiscount = new TenPercentDiscount();
// const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(tenPercentDiscount);
// const messaging = new Messaging();
const persistency = new Persistency();
// const individualCustumer = new IndividualCustumer(
//   'Sander',
//   'Sanches',
//   '111.111.111-11',
// );
const enterpriseCustumer = new EnterpriseCustumer(
  'SSV-Engenharia',
  '111111-0001-11',
);

export class MessagingMock implements MessagingProtocol {
  sendMessage(): void {
    console.log('Mensagem enviada pelo MOCK');
  }
}

const messagingMock = new MessagingMock();

const order = new Order(
  shoppingCart,
  messagingMock,
  persistency,
  enterpriseCustumer,
);

shoppingCart.addItens(new Product('melão', 13.25));
shoppingCart.addItens(new Product('maça', 9.5587));
shoppingCart.addItens(new Product('pera', 6.0));
shoppingCart.addItens(new Product('uva', 12.0));
shoppingCart.removeItem(1);

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());

order.checkout();
console.log(shoppingCart.items);
console.log(order.orderStatus);

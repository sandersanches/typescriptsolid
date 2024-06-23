import { Discount } from './discount';
import CartItensProtocol from './interfaces/cart-itens';
import ShoppingCartProtocols from './interfaces/shopping-cart-protocol';

export default class ShoppingCart implements ShoppingCartProtocols {
  private readonly _items: CartItensProtocol[] = [];

  constructor(private readonly discount: Discount) {}

  addItens(item: CartItensProtocol) {
    this._items.push(item);
  }

  removeItem(index: number) {
    this._items.splice(index, 1);
  }

  get items(): CartItensProtocol[] {
    return this._items;
  }

  total(): number {
    return +this._items.reduce((sum, item) => sum + item.price, 0).toFixed(2);
  }

  totalWithDiscount(): number {
    return this.discount.calculate(this.total());
  }

  clear() {
    console.log('O carrinho de compras foi limpo');
    this._items.length = 0;
  }
}

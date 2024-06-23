import CartItensProtocol from './cart-itens';

export default interface ShoppingCartProtocols {
  items: Readonly<CartItensProtocol[]>;
  addItens(item: CartItensProtocol): void;
  removeItem(index: number): void;
  total(): number;
  totalWithDiscount(): number;
  clear(): void;
}

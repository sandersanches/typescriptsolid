type CartItens = { nome: string; price: number };

export class ShoppingCartLegacy {
  private readonly _itens: CartItens[] = [];
  private _orderStatus: 'opened' | 'closed' = 'opened';

  addItens(item: CartItens) {
    this._itens.push(item);
  }

  removeItem(index: number) {
    this._itens.splice(index, 1);
  }

  get itens(): CartItens[] {
    return this._itens;
  }

  total(): number {
    return +this._itens.reduce((sum, item) => sum + item.price, 0).toFixed(2);
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Seu carrinho está vazio ');
      return;
    }

    this._orderStatus = 'closed';
    this.sendMessage(
      `O seu pedido com o total de ${this.total()} foi recebido.`,
    );
    this.saveOrder();
    this.clear();
  }

  private isEmpty(): boolean {
    return this._itens.length === 0;
  }

  private sendMessage(msg: string): void {
    console.log('Message sent: ' + msg);
  }

  private saveOrder(): void {
    console.log('Pedido salvo com sucesso...');
  }

  private clear() {
    console.log('O carrinho de compras foi limpo');
    this._itens.length = 0;
  }

  get orderStatus(): 'opened' | 'closed' {
    return this._orderStatus;
  }
}

const shoppingCart = new ShoppingCartLegacy();

shoppingCart.addItens({ nome: 'maça', price: 9.5587 });
shoppingCart.addItens({ nome: 'pera', price: 6.0 });
shoppingCart.addItens({ nome: 'uva', price: 12.0 });
shoppingCart.removeItem(1);

console.log(shoppingCart.itens);
console.log(shoppingCart.total());

shoppingCart.checkout();
console.log(shoppingCart.itens);
console.log(shoppingCart.orderStatus);

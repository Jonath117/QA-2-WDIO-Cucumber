import page from './page.js'

class CartPage extends page {
    get ShoppingCartContainer() { return $('#cart_contents_container')}
    get cartItems(){ return this.ShoppingCartContainer.$$('.cart_item')}

}

export default new CartPage()
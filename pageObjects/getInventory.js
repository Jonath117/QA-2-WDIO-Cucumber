import Page from './page.js'

class getInventory extends Page {
    //get inventoryHeaderContainer() { return $('#header_container') }
    //get ShoppingCartContainerHeader() { return $('.primary_header')}
    get inventoryContainer() { return $('#inventory_container') }
    get inventoryItems() { return this.inventoryContainer.$$('.inventory_item') }     
    get AddtoCartBtn() { return this.inventoryContainer.$('[data-test="add-to-cart-sauce-labs-backpack"]') } 
    get shoppingCartLink() { return $('.shopping_cart_link') }

    
}

export default new getInventory()
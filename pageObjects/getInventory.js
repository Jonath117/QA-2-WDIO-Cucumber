import Page from './page.js'

class getInventory extends Page {
    get inventoryContainer() { return $('#inventory_container') }
    get inventoryItems() { return this.inventoryContainer.$$('.inventory_item') }       
}

export default new getInventory()
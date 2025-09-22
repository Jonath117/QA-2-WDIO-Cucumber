import { Given, When, Then } from '@wdio/cucumber-framework'
import LoginPage from '../../pageObjects/loginPage.js'
import cartPage from '../../pageObjects/cartPage.js'
import getInventory from '../../pageObjects/getInventory.js'

Given('esta el usuario en la pagina inventario', async () => {
    await LoginPage.open();
    await LoginPage.login("standard_user", "secret_sauce");
    await getInventory.inventoryContainer.waitForDisplayed({ timeout: 5000});
})

When('haga click en el boton add', async () => {
    await getInventory.AddtoCartBtn.waitForDisplayed({ timeout: 5000});
    await getInventory.AddtoCartBtn.click();
})

Then('deberia haber un item en el carrito', async () => {
      await getInventory.shoppingCartLink.click();
      await cartPage.ShoppingCartContainer.waitForDisplayed({ timeout: 5000});

      const items = await cartPage.cartItems;
      expect(items.length).toBeGreaterThan(0);
})
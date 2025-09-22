import { Given, When, Then } from '@wdio/cucumber-framework'
import LoginPage from '../../pageObjects/loginPage.js'
import cartPage from '../../pageObjects/cartPage.js'
import getInventory from '../../pageObjects/getInventory.js'
import checkoutPage from '../../pageObjects/checkoutPage.js'

Given('el usuario tenga productos en su carrito', async() => {
    await LoginPage.open();
    await LoginPage.login("standard_user", "secret_sauce");
    await getInventory.inventoryContainer.waitForDisplayed({ timeout: 5000});

    await getInventory.AddtoCartBtn.waitForDisplayed({ timeout: 5000});
    await getInventory.AddtoCartBtn.click();

    await getInventory.shoppingCartLink.click();
    await cartPage.ShoppingCartContainer.waitForDisplayed({ timeout: 5000});    
})

When('quiera hacer el checkout', async() => {
    await checkoutPage.checkOutBtn.click();
})

Then('ingreso {string} {string} {string} para poder hacer el checkout', async(firstname, lastname, zipcode) => {
    await checkoutPage.form(firstname, lastname, zipcode);
    await browser.pause(2000);
})

Then('debera ver el mensaje "Thank you for your order!"', async() => {
    await checkoutPage.checkoutFinish.click();

    await checkoutPage.checkoutMessage.waitForDisplayed({ timeout: 5000 });
    
    await expect(checkoutPage.checkoutMessage).toHaveText("Thank you for your order!");

    await browser.pause(3000);
})
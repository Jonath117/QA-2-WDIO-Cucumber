import { Given, When, Then } from '@wdio/cucumber-framework'
import LoginPage from '../../pageObjects/loginPage.js'
import getInventory from '../../pageObjects/getInventory.js'

Given('estoy en la página de login', async () => {
    await LoginPage.open();
})

When('ingreso {string} y {string}', async (username, password) => {
    await LoginPage.login(username, password);
})

Then('deberia ver los productos disponibles', async () => {
    await getInventory.inventoryContainer.waitForDisplayed();
})

Then('deberia ver al menos un producto', async () => {
    const items = await getInventory.inventoryItems;
    expect(items.length).toBeGreaterThan(0);
})


Then(/^deberia ver el mensaje "([^"]*)"$/, async (expectedMessage) => {
    await LoginPage.errorMessage.waitForDisplayed({ timeout: 3000 });
    
    await expect(LoginPage.errorMessage).toHaveText(expectedMessage);
})
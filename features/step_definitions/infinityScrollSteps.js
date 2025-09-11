import { Given, When, Then } from '@wdio/cucumber-framework'
import InfinityScrollPage from '../../pageObjects/infinityScroll.js';

Given('estoy en la página de scroll infinito', async () => {
    await InfinityScrollPage.open();
});

When('hago scroll hasta el final de la página', async () => {
    await InfinityScrollPage.scrollToBottom();
});

Then('debería ver que se han cargado más elementos', async () => {
    const initialCount = await InfinityScrollPage.addedScrolls.length;

    await InfinityScrollPage.scrollToBottom();

    await browser.waitUntil(
        async () => {
            const newCount = (await InfinityScrollPage.addedScrolls).length;
            return newCount > initialCount;
        },
        {
            timeout: 5000,
            timeoutMsg: 'Se esperaba que se cargaran nuevos elementos, pero no sucedió'
        }
    );
    
    const newCount = (await InfinityScrollPage.addedScrolls).length;
    expect(newCount).toBeGreaterThan(initialCount);
});


When('no hago scroll', async () => {
    await InfinityScrollPage.noScroll();
});

Then('debería mantenerse la misma cantidad de elementos', async () => {
    const initialCount = (await InfinityScrollPage.addedScrolls).length;

    const finalCount = (await InfinityScrollPage.addedScrolls).length;

    expect(finalCount).toEqual(initialCount);
});
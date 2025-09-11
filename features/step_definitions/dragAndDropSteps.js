import { Given, When, Then } from '@wdio/cucumber-framework'
import dragAndDropPage from '../../pageObjects/dragAndDrop.js';

Given('estoy en la pagina de drag and drop', async () => {
    await dragAndDropPage.open();
});

When('arrastro el elemento A y lo suelto en la posicion del elemento B', async () => {
    await dragAndDropPage.dragAndDrop();
});

Then('deberia ver que el elemento A ha cambiado a la posicion del elemento B', async () => {
    const columnAText = await dragAndDropPage.columnA.getText();
    const columnBText = await dragAndDropPage.columnB.getText();
    if (columnAText !== 'B' || columnBText !== 'A') {
        throw new Error('El elemento A no ha cambiado a la posicion del elemento B');
    }
});


When('intento arrastrar el elemento A fuera del area designada', async () => {
    await browser.pause(1000);
    const columnALocation = await dragAndDropPage.columnA.getLocation();
    await (await dragAndDropPage.columnA).dragAndDrop({ x: columnALocation.x + 300, y: columnALocation.y + 300 });
    await browser.pause(2000);
});

Then('deberia ver que el elemento A no se mueve y permanece en su posicion original', async () => {
    const columnAText = await dragAndDropPage.columnA.getText();
    const columnBText = await dragAndDropPage.columnB.getText();
    if (columnAText !== 'A' || columnBText !== 'B') {
        throw new Error('El elemento A ha cambiado de posicion');
    }
});

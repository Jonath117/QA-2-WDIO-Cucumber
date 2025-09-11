import { Given, When, Then } from '@wdio/cucumber-framework'
import NotiMessagePage from '../../pageObjects/notiMessage.js';

Given('estoy en la pagina de mensajes de notificacion', async () => {
    await NotiMessagePage.open();
});

When('hago clic en el botón para cargar una nueva notificacion', async () => {
    await NotiMessagePage.clickHere();
});

Then('deberia ver un mensaje de notificacion valido', async () => {
    const messageText = await NotiMessagePage.getMessageText();
    const validMessages = ['Action successful', 'Action unsuccesful, please try again', 'Action unsuccessful'];
    const isValidMessage = validMessages.some(validMessage => messageText.includes(validMessage));
    if (!isValidMessage) {
        throw new Error('Mensaje inesperado: ${messageText}');
    }
});



Given('estoy en la pagina de mensajes', async () => {
    await NotiMessagePage.open();
});

When('este esperando el mensaje', async () => {
    
});

Then('este no aparece, por como se carga la pagina', async () => {
    //el elemento flash no aparece en el DOM al cargar la pagina, por lo que no se puede esperar a que aparezca
    //creo que solo aparece cuando se entre desde el home 
    const isExisting = await NotiMessagePage.message.isExisting();
    if (isExisting) {
        throw new Error('El mensaje no deberia estar presente en el DOM al cargar la pagina');
    }

});
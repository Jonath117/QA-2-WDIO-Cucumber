import Page from './page.js';

class NotiMessagePage extends Page {

     get clickHereLink() { return $('=Click here'); }
     get message() { return $('#flash');}

     async getMessageText() {
          return (await this.message).getText();
     }

     async clickHere() {
          await (await this.clickHereLink).click();
     }

     async open() {
          await super.open('notification_message_rendered');
     }

}

export default new NotiMessagePage();
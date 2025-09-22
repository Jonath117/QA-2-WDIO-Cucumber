import Page from "./page";

class CheckoutPage extends Page {
    get checkOutBtn() { return $('#checkout')};
    get checkoutForm() { return $('#checkout_info_container')};

    get inputFirstName() { return $('#first-name')};
    get inputLastName() { return $('#last-name')};
    get inputZip() { return $('#postal-code')};

    // get checkoutWrapper() {return $$('.checkout_info_wrapper')};
    // get checkoutBtns() {return $$('.checkout_buttons')};
    //get checkoutBtn() { return $('.btn btn_action btn_medium checkout_button ')};

    get checkoutContinueBtn() {return $('#continue')}

    get checkoutSummary() { return $('#checkout_summary_container')};
    get checkoutFinish() { return $('#finish')};

    // h2 class="complete-header" Thank you for your order!
    get checkoutMessage() { return $('.complete-header')};

    async form(firstname, lastname, zipcode){
        await this.inputFirstName.setValue(firstname);
        await this.inputLastName.setValue(lastname);
        await this.inputZip.setValue(zipcode);
        await this.checkoutContinueBtn.click();
    }
}

export default new CheckoutPage();
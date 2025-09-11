import Page from "./page";

class DragAndDropPage extends Page {
    get columnA() { return $('#column-a'); }
    get columnB() { return $('#column-b'); }

    
    async dragAndDrop() {
        await browser.pause(1000);

        await (await this.columnA).dragAndDrop(await this.columnB);

        await browser.pause(2000);
    }
    async open() {
        await super.open('drag_and_drop');
    }

}

export default new DragAndDropPage();
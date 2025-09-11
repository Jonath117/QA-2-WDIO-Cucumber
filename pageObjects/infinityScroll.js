import Page from './page.js';

class InfinityScroll extends Page {

    //tengo 3 div class class="scroll large-8 columns large-centered", class="jscroll-inner", class="jscroll-added"
    get scrollContainer() { return $('div.scroll.large-8.columns.large-centered'); }
    get innerScroll() { return $('div.jscroll-inner'); }
    get addedScrolls() { return $$('div.jscroll-added'); }

    async scrollToBottom() {
        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        })
    }

    async noScroll(){
        await browser.execute(() => {
            window.scrollTo(0, 0);
        });
    }

    async open() {
        await super.open('infinite_scroll');
    }
}

export default new InfinityScroll();
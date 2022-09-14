const Page = require("./page");

class SwitchWindowPage extends Page {
    get link () { return $('a[href="/page/2/"]')}
    get authorName () { return $('small[class="author"]')}

    async newPage2() {
        await link.click();
    }

    open() {
        return super.open("page/2/")
    }
}

module.exports = new SwitchWindowPage();
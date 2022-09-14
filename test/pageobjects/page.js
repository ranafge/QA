
module.exports = class Page {
    
    open (path) {
        return browser.url(
            `http://quotes.toscrape.com/${path}`
        )
    }
}
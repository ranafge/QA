

const Page = require('./page');



class AfterLogin extends Page {
    get flashAlert () {
        return $('a[href="/logout"]')
    }
}

module.exports = new AfterLogin();

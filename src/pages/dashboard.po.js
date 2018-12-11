// login.page.js
var Page = require('./page')

var DashboardPage = Object.create(Page, {
    /**
     * define elements
     */
    body: {       get: function()  { return $('.bom-outerwrapper'); } },
    bomLink:    { get: function()  { return browser.element("//a[text()='BOMs']");}},

    isOnPage: { value: function() {
        return browser.getUrl();

    } },

    goToBOM: { value: function() {
        this.bomLink.waitForExist(10000);
        this.bomLink.click();
    } },

    submit: { value: function() {
        this.submit.click()();
    } }
});

module.exports = DashboardPage;
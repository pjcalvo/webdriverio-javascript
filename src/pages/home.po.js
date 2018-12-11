// login.page.js
var Page = require('./page')

var LoginPage = Object.create(Page, {
    /**
     * define elements
     */
    username: { get: function () { return $('#form-field-1'); } },
    password: { get: function () { return $('#form-field-2'); } },
    form:     { get: function () { return $('.btn-primary'); } },

    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        Page.open.call(this, '/');
        this.username.waitForExist(10000);
    } },

    submit: { value: function() {
        this.form.click();
    } }
});

module.exports = LoginPage;
// login.page.js
var Page = require('./page')

var BomEditPage = Object.create(Page, {
    /**
     * define elements
     */
    body: {           get: function()  { return $('.ResultsHeader'); } },
    percentageBar : { get: function()  { return $('.PercentProgress'); }},

    isOnPage: { value: function() {
        this.body.waitForExist(10000);
        return true;
    } },

    waitUntilProgressBarIsGone: { value: function() {
        
        this.percentageBar.waitForExist(10000)
        
        browser.waitUntil(function () {      
            console.log('progress bar exist and i am waiting')
            isExisting = browser.isExisting('.PercentProgress')
            console.log(isExisting);
            return isExisting == false; // outputs: true  
        },15000, 'expected bar to be gone but it is still there')
    } }
});

module.exports = BomEditPage;
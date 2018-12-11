// login.page.js
var Page = require('./page')
var path = require('path')

var BomManagementPage = Object.create(Page, {
    /**
     * define elements
     */
    body: {       get: function()  { return $('.bom-outerwrapper'); } },
    bomLink:    { get: function()  { return browser.element("//a[text()='BOMs']");}},
    uploadFile: { get: function () { return $('.upload-box--button'); } },
    partsField: { get: function () { return $('textarea'); } },
    submitButton:     { get: function () { return $('.wpt-solid-button'); } },
    
    fileName:        { get: function () { return browser.element("//label[text()='File Uploaded']/following-sibling::span");}},
    fileSize:        { get: function () { return browser.element("//label[text()='File Size']/following-sibling::span");}},
    numberOfLines:   { get: function () { return browser.element("//label[text()='Number of Lines']/following-sibling::span");}},

    submit: { value: function() {
        this.submitButton.click();
    } },

    uploadBom: { value: function() {
        var fileToUpload = '../resources/goodBom.xlsx';
        var absolutePath = path.resolve(__dirname, fileToUpload);
        this.uploadFile.waitForExist(5000);
        this.uploadFile.chooseFile(absolutePath);
    } },

    getFileName: { value : function() {
        this.fileName.waitForExist(10000);
        return this.fileName.getText();
    } },

    getFileSize: { value : function() {
        return this.fileSize.getText();
    } },

    getRowCount: { value : function() {
        return this.numberOfLines.getText();
    } },

    enterBomParts: {value: function (partNumbers) {

        var parts = '';
        partNumbers.forEach(function(part){
          parts += part + '\n';
        });
    
        this.partsField.waitForExist(10000);
        this.partsField.setValue(parts);
        this.submit();
      } }
});

module.exports = BomManagementPage;
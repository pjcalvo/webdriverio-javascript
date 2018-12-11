var expect = require('chai').expect
var CommonFlows = require('../e2e-flows/common.flow')
var BomManagementPage = require('../pages/management.po')
var BomEditPage = require('../pages/bom-edit.po')
var DriverHelper = require('../helpers/driver.helper')

describe.only('when the user Manually Enter the BOM Parts', function() {

    before(function() {
        //preparation
        CommonFlows.gotoBom()
      });
    
    it('should be able to enter the Bom Part Numbers', function() {  
        //data
        var parts = ['BAV99WT1G', 'BAT54LT1G']

        //steps
        BomManagementPage.enterBomParts(parts)

        //assert
        expect(BomEditPage.isOnPage()).to.be.true
        expect(browser.getUrl()).to.contain('/bom/view/')
    });

    it('should match the Bom Edit Page UI', function() {  
        
        //assert
        BomEditPage.waitUntilProgressBarIsGone()
        expect(DriverHelper.isVisualyAccurate()).to.be.true
    });
   
    
});
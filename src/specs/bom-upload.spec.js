var expect = require('chai').expect;
var BomManagementPage = require('../pages/management.po')
var CommonFlows = require('../e2e-flows/common.flow')
var DriverHelper = require('../helpers/driver.helper')

describe.only('when the user uploads a BOM', function() {

    before(function() {
        CommonFlows.gotoBom();    
        BomManagementPage.uploadBom();
      });
    
    it('should display the FileName', function() {    
        expect(BomManagementPage.getFileName()).to.equal("goodBom");
    });

    it('should display the FileSize', function() {    
        expect(BomManagementPage.getFileSize()).to.equal("9k");       
    });

    it('should display the Row Count', function() {    
        expect(BomManagementPage.getRowCount()).to.equal("6");
    });

    it('should match Bom Upload UI', function() {       
        expect(DriverHelper.isVisualyAccurate()).to.be.true;
    });

    
});
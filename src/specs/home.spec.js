var expect = require('chai').expect;
var HomePage = require('../pages/home.po');
var DashboardPage = require('../pages/dashboard.po');

describe.skip('when the BOM tool login is working as expected', function() {

    before(function() {
        HomePage.open();
    });

      it('should match the HomePage UI', function() {       
        expect(DriverHelper.isVisualyAccurate()).to.be.true;
    });

    it('should login the user with valid credentials', function() {

        HomePage.username.setValue('testarrowna4dd@testL4.com');
        HomePage.password.setValue('Arrow123');
        HomePage.submit();

        expect(DashboardPage.isOnPage()).to.contain('/dashboard');
    });
    
});
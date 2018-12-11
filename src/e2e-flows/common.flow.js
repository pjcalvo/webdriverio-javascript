var HomePage = require ('../pages/home.po')
var DashboardPage = require ('../pages/dashboard.po')

var CommonFlows = {

    loginUser: function() {
        HomePage.open();
        HomePage.username.setValue('testarrowna4dd@testL4.com');
        HomePage.password.setValue('Arrow123');
        HomePage.submit();
    },

    gotoBom: function() {
        this.loginUser();
        DashboardPage.goToBOM();
    }

};

module.exports = CommonFlows;
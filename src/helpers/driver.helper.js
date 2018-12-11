
var DriverHelper = {

    isVisualyAccurate : function() {
        var result = browser.checkDocument()[0];
        return result.isWithinMisMatchTolerance;
    }
};

module.exports = DriverHelper;
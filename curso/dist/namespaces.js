"use strict";
var Utility;
(function (Utility) {
    var Taxes;
    (function (Taxes) {
        function getIVA(price) {
            return (price * 0.21) * price;
        }
        Taxes.getIVA = getIVA;
        function getIVAStrong(price) {
            return (price * 0.35) * price;
        }
        Taxes.getIVAStrong = getIVAStrong;
    })(Taxes = Utility.Taxes || (Utility.Taxes = {}));
})(Utility || (Utility = {}));

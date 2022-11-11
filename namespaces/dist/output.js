"use strict";
var Utility;
(function (Utility) {
    let Taxes;
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
/// <reference path="namespaces.ts" />
let utils = Utility.Taxes;
console.log(utils.getIVA(20));
console.log(utils.getIVAStrong(20));

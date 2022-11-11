"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Roles = void 0;
var Roles;
(function (Roles) {
    Roles[Roles["USER"] = 0] = "USER";
    Roles["ADMIN"] = "ADMIN";
    Roles[Roles["SUPERADMIN"] = 5] = "SUPERADMIN";
})(Roles || (Roles = {}));
exports.Roles = Roles;
console.log(Roles.USER);
const Ranks = {
    MOD: "MOD",
    ADMIN: 1,
    USER: 0,
};
console.log(Ranks);

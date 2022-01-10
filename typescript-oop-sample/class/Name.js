"use strict";
exports.__esModule = true;
exports.Name = void 0;
var Name = (function () {
    function Name(firstName, lastName, prefix) {
        if (prefix === void 0) { prefix = ''; }
        this.firstName = firstName;
        this.lastName = lastName;
        this.prefix = prefix;
    }
    Name.prototype.getFullName = function () {
        return "".concat(this.prefix ? this.prefix + ' ' : '').concat(this.lastName, " ").concat(this.firstName);
    };
    return Name;
}());
exports.Name = Name;
//# sourceMappingURL=Name.js.map
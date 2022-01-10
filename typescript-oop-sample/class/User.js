"use strict";
exports.__esModule = true;
exports.User = void 0;
var Name_1 = require("./Name");
var User = (function () {
    function User(options) {
        this.id = 0;
        this.name = new Name_1.Name('', '');
        this.email = '';
        this.role = '';
        this.address = '';
        this.active = true;
        for (var _i = 0, _a = Object.keys(options); _i < _a.length; _i++) {
            var key = _a[_i];
            this[key] = options[key];
        }
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.js.map
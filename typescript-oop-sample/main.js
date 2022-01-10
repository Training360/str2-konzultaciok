"use strict";
exports.__esModule = true;
var Name_1 = require("./class/Name");
var User_1 = require("./class/User");
var misi = new User_1.User({
    id: 1,
    name: new Name_1.Name('Mihály', 'Kovács', 'Dr.'),
    address: 'Budapest',
    email: 'kovcsm@gmail.com',
    role: 'admin'
});
console.log(misi.name.getFullName());
//# sourceMappingURL=main.js.map
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = require("bcrypt");
exports.cryptPassword = (password) => __awaiter(this, void 0, void 0, function* () {
    const salt = yield bcrypt_1.genSalt(10);
    return bcrypt_1.hash(password, salt);
});
exports.comparePassword = (plainPass, hashword) => {
    return bcrypt_1.compare(plainPass, hashword);
};
//# sourceMappingURL=crypt.js.map
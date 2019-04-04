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
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const path = require("path");
const favicon = require("serve-favicon");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const express = require("express");
const session = require("express-session");
const { PORT, PUBLIC_DIR, NODE_ENV } = process.env;
const PUBLIC_DIR_PATH = (process.env.NODE_ENV = 'development') ? 'client/public' : (process.env.NODE_ENV = 'production') ? 'client/build' : PUBLIC_DIR;
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        app.use(favicon(path.join(__dirname, '..', '..', `${PUBLIC_DIR_PATH}/assets/favicon`, 'favicon.ico')));
        app.use(bodyParser.json());
        app.use(cookieParser());
        app.use(express.static(path.join(__dirname, '..', '..', PUBLIC_DIR_PATH)));
        app.use(session({
            secret: 'the force',
            resave: true,
            saveUnitialized: true,
            proxy: true
        }));
        app.use(passport.initialize());
        app.use(passport.session());
        yield app.listen(PORT || 3001, '0.0.0.0');
        console.log(`Server started on ${PORT || 3001}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map
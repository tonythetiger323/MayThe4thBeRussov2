"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_module_1 = require("./users/users.module");
const app_controller_1 = require("./app.controller");
const users_service_1 = require("./users/users.service");
const typeorm_2 = require("typeorm");
const rsvps_module_1 = require("./rsvps/rsvps.module");
const rsvps_service_1 = require("./rsvps/rsvps.service");
const auth_module_1 = require("./auth/auth.module");
const auth_service_1 = require("./auth/auth.service");
let AppModule = class AppModule {
    constructor(connection) {
        this.connection = connection;
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [users_module_1.UsersModule, rsvps_module_1.RsvpsModule, auth_module_1.AuthModule, typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: process.env.TYPEORM_HOST,
                port: 3306,
                username: process.env.TYPEORM_USERNAME,
                password: process.env.TYPEORM_PASSWORD,
                database: process.env.TYPEORM_DATABASE,
                entities: [__dirname + '/**/*.entity{.ts,.js}'],
                synchronize: true
            })],
        controllers: [app_controller_1.AppController],
        providers: [users_service_1.UsersService, rsvps_service_1.RsvpsService, auth_service_1.AuthService]
    }),
    __metadata("design:paramtypes", [typeorm_2.Connection])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
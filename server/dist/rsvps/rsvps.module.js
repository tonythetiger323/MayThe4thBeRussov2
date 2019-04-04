"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_module_1 = require("../users/users.module");
const rsvp_entity_1 = require("./rsvp.entity");
const rsvps_controller_1 = require("./rsvps.controller");
const rsvps_service_1 = require("./rsvps.service");
const users_service_1 = require("../users/users.service");
let RsvpsModule = class RsvpsModule {
};
RsvpsModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([rsvp_entity_1.Rsvp]), users_module_1.UsersModule],
        controllers: [rsvps_controller_1.RsvpsController],
        providers: [rsvps_service_1.RsvpsService, users_service_1.UsersService]
    })
], RsvpsModule);
exports.RsvpsModule = RsvpsModule;
//# sourceMappingURL=rsvps.module.js.map
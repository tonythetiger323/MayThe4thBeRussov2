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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const rsvps_service_1 = require("./rsvps.service");
const rsvp_entity_1 = require("./rsvp.entity");
const users_service_1 = require("../users/users.service");
let RsvpsController = class RsvpsController {
    constructor(rsvpsService, usersService) {
        this.rsvpsService = rsvpsService;
        this.usersService = usersService;
    }
    create(params, res, rsvpData) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Request made to '/api/rsvps'`);
            if (!(rsvpData && rsvpData.rsvp && rsvpData.guests && rsvpData.cars)) {
                return res.status(common_1.HttpStatus.FORBIDDEN).json({ message: 'RSVP, number of guests, and number of cars is required' });
            }
            ;
            const user = yield this.usersService.findById(params.id);
            rsvpData.user = user.id;
            const rsvp = yield this.rsvpsService.create(rsvpData);
            return res.status(common_1.HttpStatus.OK).json(rsvp);
        });
    }
};
__decorate([
    common_1.Post(':id'),
    __param(0, common_1.Param()), __param(1, common_1.Res()), __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, rsvp_entity_1.Rsvp]),
    __metadata("design:returntype", Promise)
], RsvpsController.prototype, "create", null);
RsvpsController = __decorate([
    common_1.Controller('api/rsvps'),
    __metadata("design:paramtypes", [rsvps_service_1.RsvpsService, users_service_1.UsersService])
], RsvpsController);
exports.RsvpsController = RsvpsController;
//# sourceMappingURL=rsvps.controller.js.map
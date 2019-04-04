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
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../users/user.entity");
const class_validator_1 = require("class-validator");
let Rsvp = class Rsvp {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    class_validator_1.IsUUID(),
    __metadata("design:type", String)
], Rsvp.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('varchar', { length: 3 }),
    class_validator_1.MaxLength(3),
    __metadata("design:type", String)
], Rsvp.prototype, "rsvp", void 0);
__decorate([
    typeorm_1.Column({ type: 'int' }),
    class_validator_1.IsInt(),
    __metadata("design:type", Number)
], Rsvp.prototype, "guests", void 0);
__decorate([
    typeorm_1.Column({ type: 'int' }),
    class_validator_1.IsInt(),
    __metadata("design:type", Number)
], Rsvp.prototype, "cars", void 0);
__decorate([
    typeorm_1.OneToOne(type => user_entity_1.User, user => user.rsvp),
    typeorm_1.JoinColumn(),
    __metadata("design:type", user_entity_1.User)
], Rsvp.prototype, "user", void 0);
Rsvp = __decorate([
    typeorm_1.Entity()
], Rsvp);
exports.Rsvp = Rsvp;
//# sourceMappingURL=rsvp.entity.js.map
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
const common_1 = require("@nestjs/common");
const dotenv = require("dotenv");
const Joi = require("joi");
const fs = require("fs");
let ConfigService = class ConfigService {
    constructor(filePath) {
        filePath = 'development.env';
        const config = dotenv.parse(fs.readFileSync(filePath));
        this.envConfig = this.validateInput(config);
    }
    validateInput(envConfig) {
        const envVarsSchema = Joi.object({
            NODE_ENV: Joi.string()
                .valid(['development', 'production', 'test', 'provision'])
                .default('development'),
            PORT: Joi.number().default(3000),
            MY_SQL_HOST: Joi.string(),
            MY_SQL_PORT: Joi.number(),
            MY_SQL_USER: Joi.string(),
            MY_SQL_KEY: Joi.string(),
            DB_NAME: Joi.string(),
        });
        const { error, value: validatedEnvConfig } = Joi.validate(envConfig, envVarsSchema);
        if (error) {
            throw new Error(`Config validation error: ${error.message}`);
        }
        return validatedEnvConfig;
    }
    get nodeEnv() {
        return this.envConfig.NODE_ENV;
    }
    get port() {
        return Number(this.envConfig.PORT);
    }
    get mySqlHost() {
        return this.envConfig.MY_SQL_HOST;
    }
    get mySqlPort() {
        return Number(this.envConfig.MY_SQL_PORT);
    }
    get mySqlUser() {
        return this.envConfig.MY_SQL_USER;
    }
    get mySqlKey() {
        return this.envConfig.MY_SQL_KEY;
    }
    get dbName() {
        return this.envConfig.DB_NAME;
    }
};
ConfigService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [String])
], ConfigService);
exports.ConfigService = ConfigService;
//# sourceMappingURL=config.service.js.map
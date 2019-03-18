import { Injectable } from '@nestjs/common'
import * as dotenv from 'dotenv'
import * as Joi from 'joi'
import * as fs from 'fs'

export interface EnvConfig {
  [key: string]: string;
}

@Injectable()
export class ConfigService {
  private readonly envConfig: EnvConfig;

  constructor(filePath: string) {
    filePath = 'development.env';
    const config = dotenv.parse(fs.readFileSync(filePath));
    this.envConfig = this.validateInput(config);
  }

  private validateInput(envConfig: EnvConfig): EnvConfig {
    const envVarsSchema: Joi.ObjectSchema = Joi.object({
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

    const { error, value: validatedEnvConfig } = Joi.validate(
      envConfig,
      envVarsSchema,
    );
    if (error) {
      throw new Error(`Config validation error: ${error.message}`);
    }
    return validatedEnvConfig;
  }
  get nodeEnv(): string {
    return this.envConfig.NODE_ENV;
  }

  get port(): number {
    return Number(this.envConfig.PORT);
  }

  get mySqlHost(): string {
    return this.envConfig.MY_SQL_HOST;
  }

  get mySqlPort(): number {
    return Number(this.envConfig.MY_SQL_PORT);
  }

  get mySqlUser(): string {
    return this.envConfig.MY_SQL_USER;
  }

  get mySqlKey(): string {
    return this.envConfig.MY_SQL_KEY;
  }

  get dbName(): string {
    return this.envConfig.DB_NAME;
  }
}

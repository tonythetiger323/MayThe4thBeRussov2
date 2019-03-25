import { Injectable } from '@nestjs/common'
import * as dotenv from 'dotenv'
import * as Joi from 'joi'
import * as fs from 'fs'

export interface EnvConfig {
  [key: string]: string
}

@Injectable()
export class ConfigService {
  private readonly envConfig: EnvConfig

  constructor(filePath: string) {
    filePath = `${process.env.NODE_ENV}.env`
    const config = dotenv.parse(fs.readFileSync(filePath))
    this.envConfig = this.validateInput(config)
  }

  private validateInput(envConfig: EnvConfig): EnvConfig {
    const envVarsSchema: Joi.ObjectSchema = Joi.object({
      NODE_ENV: Joi.string()
        .valid(['development', 'production', 'test', 'provision'])
        .default('development')
      })

    const { error, value: validatedEnvConfig } = Joi.validate(
      envConfig,
      envVarsSchema
    )
    if (error) {
      throw new Error(`Config validation error: ${error.message}`)
    }
    return validatedEnvConfig
  }

  get nodeEnv(): string {
    return String(this.envConfig.NODE_ENV)
  }
}

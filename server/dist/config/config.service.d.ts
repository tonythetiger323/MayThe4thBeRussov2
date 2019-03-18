export interface EnvConfig {
    [key: string]: string;
}
export declare class ConfigService {
    private readonly envConfig;
    constructor(filePath: string);
    private validateInput;
    readonly nodeEnv: string;
    readonly port: number;
    readonly mySqlHost: string;
    readonly mySqlPort: number;
    readonly mySqlUser: string;
    readonly mySqlKey: string;
    readonly dbName: string;
}

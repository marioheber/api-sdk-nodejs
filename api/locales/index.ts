import { SmartlingBaseApi } from "../base/index";
import { SmartlingAuthApi } from "../auth/index";
import { Logger } from "../logger";
import { SmartlingLocaleDto } from "./dto/smartling-locale-dto";
import { SmartlingListResponse } from "../http/smartling-list-response";
import { GetLocalesParameters } from "./params/get-locales-parameters";

export class SmartlingLocalesApi extends SmartlingBaseApi {
    constructor(smartlingApiBaseUrl: string, authApi: SmartlingAuthApi, logger: Logger) {
        super(logger);
        this.authApi = authApi;
        this.entrypoint = `${smartlingApiBaseUrl}/locales-api/v2/dictionary`;
    }

    async getLocales(
        params?: GetLocalesParameters
    ): Promise<SmartlingListResponse<SmartlingLocaleDto>> {
        return await this.makeRequest(
            "get",
            `${this.entrypoint}/locales`,
            params ? params.export() : null
        );
    }
}

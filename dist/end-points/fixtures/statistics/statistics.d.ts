/// <reference types="node" />
import { FixtureStatisticsResponse, SearchFixtureStatistics } from './statistics.d';
/** https://www.api-football.com/documentation-v3#operation/get-fixtures-statistics */
export declare const statistics: (search: SearchFixtureStatistics, xRapidApiKey: string) => Promise<[import("../../../common/types").ApiFootballResponse<SearchFixtureStatistics, FixtureStatisticsResponse[]>, import("http").IncomingMessage]>;
//# sourceMappingURL=statistics.d.ts.map
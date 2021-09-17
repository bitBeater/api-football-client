/// <reference types="node" />
import { statisticsTypes } from './statistics.d';
/** https://www.api-football.com/documentation-v3#operation/get-fixtures-statistics */
export declare const statistics: (search: statisticsTypes.SearchFixtureStatistics, xRapidApiKey: string) => Promise<[import("../../..").ApiFootballResponse<statisticsTypes.SearchFixtureStatistics, statisticsTypes.FixtureStatisticsResponse[]>, import("http").IncomingMessage]>;
//# sourceMappingURL=statistics.d.ts.map
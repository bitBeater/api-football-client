/// <reference types="node" />
import { SearchFixtureStatistics, FixtureStatisticsResponse } from './types';
/** https://www.api-football.com/documentation-v3#operation/get-fixtures-statistics */
export declare const statistics: (search: SearchFixtureStatistics, xRapidApiKey: string) => Promise<[import("../../..").ApiFootballResponse<SearchFixtureStatistics, FixtureStatisticsResponse[]>, import("http").IncomingMessage]>;
//# sourceMappingURL=statistics.d.ts.map
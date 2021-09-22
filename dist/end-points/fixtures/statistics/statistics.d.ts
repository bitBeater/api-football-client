/// <reference types="node" />
import { SearchFixtureStatistics, FixtureStatisticsResponse } from './types';
/** https://www.api-football.com/documentation-v3#operation/get-fixtures-statistics */
export declare const statistics: (s: import("../../..").ApiRequest<SearchFixtureStatistics, FixtureStatisticsResponse[]>) => Promise<[import("../../..").ApiFootballResponse<SearchFixtureStatistics, FixtureStatisticsResponse[]>, import("http").IncomingMessage]>;
//# sourceMappingURL=statistics.d.ts.map
/// <reference types="node" />
import { SearchFixtures, FixtureResponse } from './fixtures.d';
/** https://www.api-football.com/documentation-v3#operation/get-fixtures */
export declare const fixtures: (search: SearchFixtures, xRapidApiKey: string) => Promise<[import("../../../common/types").ApiFootballResponse<SearchFixtures, FixtureResponse[]>, import("http").IncomingMessage]>;
//# sourceMappingURL=fixtures.d.ts.map
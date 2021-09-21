/// <reference types="node" />
import { SearchFixtures, FixtureResponse } from './types';
/** https://www.api-football.com/documentation-v3#operation/get-fixtures */
export declare const fixtures: (search: SearchFixtures, xRapidApiKey: string) => Promise<[import("../../..").ApiFootballResponse<SearchFixtures, FixtureResponse[]>, import("http").IncomingMessage]>;
//# sourceMappingURL=fixtures.d.ts.map
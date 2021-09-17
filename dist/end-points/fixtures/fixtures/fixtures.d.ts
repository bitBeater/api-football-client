/// <reference types="node" />
import { fixturesTypes as fixt } from './fixtures.d';
/** https://www.api-football.com/documentation-v3#operation/get-fixtures */
export declare const fixtures: (search: fixt.SearchFixtures, xRapidApiKey: string) => Promise<[import("../../..").ApiFootballResponse<fixt.SearchFixtures, fixt.FixtureResponse[]>, import("http").IncomingMessage]>;
//# sourceMappingURL=fixtures.d.ts.map
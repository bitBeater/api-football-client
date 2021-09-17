/// <reference types="node" />
import { fixturesTypes } from './fixtures.d';
/** https://www.api-football.com/documentation-v3#operation/get-fixtures */
export declare const fixtures: (search: fixturesTypes.SearchFixtures, xRapidApiKey: string) => Promise<[import("../../..").ApiFootballResponse<fixturesTypes.SearchFixtures, fixturesTypes.FixtureResponse[]>, import("http").IncomingMessage]>;
//# sourceMappingURL=fixtures.d.ts.map
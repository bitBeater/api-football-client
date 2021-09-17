/// <reference types="node" />
import { palyersTypes } from './types';
/** https://www.api-football.com/documentation-v3#operation/get-fixtures-players */
export declare const players: (search: palyersTypes.SearchPlayersStatisticsByFixtureId, xRapidApiKey: string) => Promise<[import("../../..").ApiFootballResponse<palyersTypes.SearchPlayersStatisticsByFixtureId, palyersTypes.FixturesPlayersResponse[]>, import("http").IncomingMessage]>;
//# sourceMappingURL=players.d.ts.map
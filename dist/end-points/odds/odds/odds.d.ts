/// <reference types="node" />
import { oddsTypes } from './types';
/** https://www.api-football.com/documentation-v3#operation/get-odds */
export declare const odds: (search: oddsTypes.SerachOdds, xRapidApiKey: string) => Promise<[import("../../..").ApiFootballResponse<oddsTypes.SerachOdds, oddsTypes.OddsResponse[]>, import("http").IncomingMessage]>;
//# sourceMappingURL=odds.d.ts.map
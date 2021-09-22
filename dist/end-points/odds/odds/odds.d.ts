/// <reference types="node" />
import { SerachOdds, OddsResponse } from './types';
/** https://www.api-football.com/documentation-v3#operation/get-odds */
export declare const odds: (s: import("../../..").ApiRequest<SerachOdds, OddsResponse[]>) => Promise<[import("../../..").ApiFootballResponse<SerachOdds, OddsResponse[]>, import("http").IncomingMessage]>;
//# sourceMappingURL=odds.d.ts.map
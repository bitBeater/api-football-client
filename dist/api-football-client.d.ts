/// <reference types="node" />
import { ApiFootballResponse } from './common/types';
import { IncomingMessage } from 'http';
import { SearchFixtures, FixtureResponse, SearchFixtureStatistics, FixtureStatisticsResponse, SearchPlayersStatisticsByFixtureId, FixturesPlayersResponse, SerachOdds, OddsResponse } from '.';
export declare class ApiFootBallClient {
    private readonly xRapidApiKey;
    constructor(xRapidApiKey: string);
    /** https://www.api-football.com/documentation-v3#operation/get-fixtures */
    fixtures(search: SearchFixtures): Promise<[ApiFootballResponse<SearchFixtures, FixtureResponse[]>, IncomingMessage]>;
    /** https://www.api-football.com/documentation-v3#operation/get-fixtures-statistics */
    fixturesStatistics(search: SearchFixtureStatistics): Promise<[ApiFootballResponse<SearchFixtureStatistics, FixtureStatisticsResponse[]>, IncomingMessage]>;
    /** https://www.api-football.com/documentation-v3#operation/get-fixtures-players */
    fixturesPlayers(search: SearchPlayersStatisticsByFixtureId): Promise<[ApiFootballResponse<SearchPlayersStatisticsByFixtureId, FixturesPlayersResponse[]>, IncomingMessage]>;
    /** https://www.api-football.com/documentation-v3#operation/get-odds */
    odds(search: SerachOdds): Promise<[ApiFootballResponse<SerachOdds, OddsResponse[]>, IncomingMessage]>;
}
//# sourceMappingURL=api-football-client.d.ts.map
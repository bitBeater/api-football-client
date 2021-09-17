/// <reference types="node" />
import { ApiFootballResponse } from './common/types';
import { SearchFixtures, FixtureResponse } from './end-points/fixtures/fixtures/fixtures.d';
import { FixtureStatisticsResponse, SearchFixtureStatistics } from './end-points/fixtures/statistics/statistics.d';
import { SearchPlayersStatisticsByFixtureId, FixturesPlayersResponse } from './end-points/fixtures/players/types';
import { SerachOdds, OddsResponse } from './end-points/odds/odds/types';
import { IncomingMessage } from 'http';
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